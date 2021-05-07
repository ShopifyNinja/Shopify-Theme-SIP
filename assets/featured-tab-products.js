var sectionAllProducts = [];
var $handles = [];
var $limits = [];
var $productGridItem = '';
var $firstFeaturedProducts = '';
var $secondFeaturedProducts = '';
var $product = '';
var shopUrl = window.location.origin;
var permanent_domain = '';


function getCollectionProducts(handle) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            url: '/collections/' + handle + '/products.json',
            type: 'GET',
            dataType: 'json',
            success: resolve,
            error: reject
        });
    });
};

function getProductData(handle) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            url: '/products/' + handle + '.js',
            type: 'GET',
            dataType: 'json',
            success: function(res) { resolve(res) },
            error: function(err) { reject(err) }
        });
    });

}; /* getProductData (handle) */

function dateDiffInDays(a, b) {
    // Discard the time and time-zone information.
    var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));
};

function productGridTemplate($product) {
    var imgUrl = $product.featured_image;
    var imgExtension = '.' + imgUrl.match(/\.([^\./\?]+)($|\?)/)[1];
    var newImgPattern = '_300x' + imgExtension;
    var lazyImgUrl = imgUrl.replace(imgExtension, newImgPattern);
    var available_vid = '';
    var available_vid_status = false;
    permanent_domain = $('body .tabs_sec').data('permanent_domain');

    if ($product.variants.length > 1) {
        for (var k in $product.variants) {
            if ($product.variants[k].inventory_quantity > 0) {
                available_vid = $product.variants[k].id;
                if ($product.variants[k].available) available_vid_status = true;
                break;
            }
        }
    }

    $productGridItem = '<div class="col-lg-3 col-6 featured-new-products__col">';
    $productGridItem += ' <div class="product-item">';
    $productGridItem += ' <form action="/cart/add" method="post"';

    if ($product.variants.length > 1 || $product.options.length > 1) {
        $productGridItem += ' class="shopify-product-item-form clearfix product_form init product_form_options"';
    } else {
        $productGridItem += ' class="shopify-product-item-form clearfix product_form init"';
    }

    $productGridItem += ' id="product-form-' + $product.id + '" data-money-format="${{amount}}" data-shop-currency="USD"';
    $productGridItem += ' data-enable-state="true" data-product-id="' + $product.id + '">';
    $productGridItem += '  <div class="product-item__img-container">';
    $productGridItem += '   <img src="' + lazyImgUrl + '" data-src="' + imgUrl + '">';
    $productGridItem += '   <a href="' + $product.url + '" class="product-item__link"></a>';
    $productGridItem += '   <noscript><select name="id">';

    if ($product.variants.length > 1) {
        for (var k in $product.variants) {
            $productGridItem += ' <option ' + ($product.variants[k].id == available_vid ? 'selected' : '');
            if (!$product.variants[k].available) {
                $productGridItem += 'disabled';
            }
            $productGridItem += ' value="' + $product.variants[k].id + '">' + $product.variants[k].title + '</option>';
        }
    }

    $productGridItem += '   </select></noscript>';
    if (available_vid_status) {
        $productGridItem += '  <button class="product-item__submit" type="submit" name="add" data-submit-button>';
    } else {
        $productGridItem += '  <button disabled class="product-item__submit disabled_btn" type="submit" name="add" data-submit-button>';
    }

    $productGridItem += '  <span>Add to Bag</span><span>➡</span>';
    $productGridItem += '  </button>';
    $productGridItem += '  </div>';
    $productGridItem += '  <input type="hidden" id="Quantity" name="quantity" value="1" min="1">';
    $productGridItem += '  </form>';
    $productGridItem += '  <div class="product-item__title-bar">';
    $productGridItem += '   <a class="product-item__title" href="' + JSON.stringify($product.url) + '">' + $product.title + '</a>';


    // swym-product-view-snippet start
    $productGridItem += '<script class="swym-product-view-snippet">';
    $productGridItem += 'if(!window.SwymViewProducts){window.SwymViewProducts = {};}';
    $productGridItem += 'if(!window.SwymWatchProducts){window.SwymWatchProducts = {};}';
    $productGridItem += 'if(!window.SwymProductVariants){window.SwymProductVariants = {};}';
    $productGridItem += '(function(et){';
    $productGridItem += 'var collections = ' + JSON.stringify($product.type) + ';';

    $productGridItem += 'var variants = [], currentVariant, variantPrice = ' + ($product.price_min / 100) + ', stk;';
    $productGridItem += 'if (variants.length == 0){';
    $productGridItem += 'currentVariant = ' + JSON.stringify($product.variants[0].id) + ';variants.push({ ' + JSON.stringify($product.variants[0].title) + ' :' + JSON.stringify($product.variants[0].id) + '});variantPrice = ' + ($product.variants[0].price / 100) + ';';
    $productGridItem += 'stk = ' + $product.variants[0].inventory_quantity + ';';
    $productGridItem += '}';
    $productGridItem += 'var product_data = {';
    $productGridItem += 'empi:' + JSON.stringify($product.id) + ',epi : currentVariant,';
    $productGridItem += 'dt :' + JSON.stringify($product.title) + ',du  :"' + shopUrl + $product.url + '",';
    $productGridItem += 'ct     :collections,pr     : variantPrice, stk: stk,';
    $productGridItem += 'iu :' + JSON.stringify(lazyImgUrl) + ',variants:variants';
    $productGridItem += '};';
    $productGridItem += 'SwymViewProducts[' + JSON.stringify($product.handle) + '] = SwymViewProducts[' + JSON.stringify($product.id) + '] = product_data;';
    $productGridItem += 'var o = {};';
    if ($product.variants.length > 1) {
        for (var k in $product.variants) {
            var variant = $product['variants'][k];
            $productGridItem += 'o[' + JSON.stringify(variant.id) + '] = {"id": ' + JSON.stringify(variant.id) + ',"inventory_management": ' + JSON.stringify(variant.inventory_management) + ',"inventory_quantity": ' + JSON.stringify(variant.inventory_quantity) + ',"title": ' + JSON.stringify(variant.title) + ', "inventory_policy": ' + JSON.stringify(variant.inventory_policy) + '};';
        }
    }
    $productGridItem += 'SwymWatchProducts[' + JSON.stringify($product.handle) + '] = SwymWatchProducts[' + JSON.stringify($product.id) + '] = o;';
    $productGridItem += '})();';
    $productGridItem += '</script>';
    // swym-product-view-snippet end

    $productGridItem += '   <button class="swym-button swym-loaded swym-add-to-wishlist-view-product product_' + $product.id + '" data-swaction="addToWishlist" data-product-id="' + JSON.stringify($product.id) + '" style="color:#000 !important;"></button>';
    $productGridItem += '  </div>';
    $productGridItem += '  <div class="product-item__price-wrap" data-price-wrapper>';
    $productGridItem += '   <span data-product-price class="product-item__price ' + ($product.compare_at_price_max > $product.price ? 'discounted' : '') + '" data-product_item="">';

    if ($product.price_varies) {
        $productGridItem += 'from $' + ($product.price_min / 100);
    } else {
        $productGridItem += '$' + ($product.variants[0].price / 100);
    }

    if ($product.variants[0].compare_at_price > $product.variants[0].price) {
        $productGridItem += ' <span class="visually-hidden" data-compare-text>Regular price</span>';
        $productGridItem += ' <s class="product-item__price-compare" data-compare-price>$' + ($product.variants[0].compare_at_price / 100) + '</s>';
    }

    $productGridItem += '   </span>';

    $productGridItem += '  <div class="grid-view-item__reviews"><div class="yotpo bottomLine" data-product-id="' + $product.id + '"></div></div>';
    $productGridItem += '  </div>';


    $productGridItem += '  <div class="tag-group">';
    $productGridItem += '   <ul class="product-tags-labels">';

    if ($product.tags.length > 0) {
        $product.tags.forEach(function(tag) {
            if (tag == 'new arrival') {
                var published_at = new Date($product.published_at.split('T')[0]);
                var nowDate = new Date(new Date().toISOString().split('T')[0]);
                if (dateDiffInDays(published_at, nowDate) < 7) {
                    $productGridItem += '   <li class="tag-new"><span>NEW</span></li>';
                }
            }

            if (tag == 'sale') {
                $productGridItem += '   <li class="tag-normal"><span>SALE</span></li>';
            }
        });
    }

    if (!$product.available) {
        $productGridItem += '  <li><span>SOLD OUT - SIGN UP FOR RESTOCK</span></li>';
    }

    $productGridItem += '   </ul>';
    $productGridItem += '  </div>';
    $productGridItem += ' </div>';
    $productGridItem += '</div>';

    return $productGridItem;
}; /* productGridTemplate ($product) */

//$(document).ready(function(){

var $featuredTabSection = jQuery('body .tabs_sec');

if (!!$featuredTabSection.data('tab-1')) {
    $handles.push($featuredTabSection.data('tab-1'));
    $limits.push($featuredTabSection.data('tab-1-limit'));
}

if (!!$featuredTabSection.data('tab-2')) {
    $handles.push($featuredTabSection.data('tab-2'));
    $limits.push($featuredTabSection.data('tab-2-limit'));
}

if ($handles.length > 0) {

    Promise.all($handles.map(getCollectionProducts))
        .then((results) => {
            const mapProductHandlesByCollection = results.filter(Boolean).reduce((acc, itr, index) => {
                return {
                    ...acc,
                    [$handles[index]]: itr.products.map(p => p.handle).slice(0, +$limits[index])
                }
            }, {})
            const mapProductHandles = Object.keys(mapProductHandlesByCollection).reduce((acc, collectionHandle) => {
                const productHandles = mapProductHandlesByCollection[collectionHandle]
                productHandles.forEach(p => {
                    if (acc.indexOf(p) < 0) {
                        acc.push(p)
                    }
                })
                return acc
            }, [])

            // make /product API calls in parallel
            return Promise.all(mapProductHandles.map(getProductData))
                .then((allProducts) => {
                    const mapProductsByHandle = allProducts.reduce((acc, itr) => {
                        return {
                            ...acc,
                            [itr.handle]: itr
                        }
                    }, {})

                    // render all collection products
                    const firstTabContent = allProducts.map(productGridTemplate).join('')
                    $('#tab-1 .featured-new-products__row').html(firstTabContent);

                    const secondTabContent = mapProductHandlesByCollection[$handles[0]].map(_handle => productGridTemplate(mapProductsByHandle[_handle])).join('');
                    $('#tab-2 .featured-new-products__row').html(secondTabContent);

                    const thirdTabContent = mapProductHandlesByCollection[$handles[1]].map(_handle => productGridTemplate(mapProductsByHandle[_handle])).join('');
                    $('#tab-3 .featured-new-products__row').html(thirdTabContent);

                    // load swym-wishlist
                    document.dispatchEvent(new CustomEvent('featuredTabLoaded')); // Go to swymSnippet.liquid
                })
        })
        .catch(err => {
            console.log(err)
        });
}