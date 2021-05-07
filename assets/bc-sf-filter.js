

// Override Settings
var bcSfFilterSettings = {
    general: {
        //limit: 12,
        /* Optional */
        // loadProductFirst: true,
    }
};

// Declare Templates
var bcSfFilterTemplate = {
    'soldOutClass': 'sold-out',
    'saleClass': 'on-sale',
    'soldOutLabelHtml': '<div>' + bcSfFilterConfig.label.sold_out + '</div>',
    'saleLabelHtml': '<div>' + bcSfFilterConfig.label.sale + '</div>',
    'vendorHtml': '<div>{{itemVendorLabel}}</div>',

    // Grid Template

    'productGridItemHtml': '<div class="col-lg-3 col-6 index-f-products__col">' +
								'<div class="product-item">'+
									'<form method="post" action="/cart/add" id="product_form_{{itemId}}" accept-charset="UTF-8" class="shopify-product-form" enctype="multipart/form-data" data-product-form="" data-product-handle="mom-me-stripe-button-tie-tank-pink-orange" data-enable-history-state="true"><input type="hidden" name="form_type" value="product"><input type="hidden" name="utf8" value="✓">'+
										'<div class="product-item__img-container">' +
											'<img src="{{itemThumbUrl}}" alt="{{itemTitle}}" />'+
											'<a href="https://'+jQuery(location).attr('hostname')+'{{itemUrl}}" class="product-item__link"></a>'+
											'{{itemVariation}}'+
											'{{itemVariants}}'+
											'<button type="submit" name="add" class="product-item__submit" data-submit-button="">'+
											'<span>Add to Bag</span>'+
											'<span>➡</span>'+
										    '</button>'+
										'</div>' +
										'<input type="hidden" id="Quantity" name="quantity" value="1" min="1">'+
									'</form>'+
									'<div class="product-item__title-bar">'+
										'<a class="product-item__title grid-link" href="https://'+jQuery(location).attr('hostname')+'{{itemUrl}}">'+
										'{{itemTitle}}</a>'+
										'{{itemWishlist}}'+
									'</div>'+
									'<div class="product-item__price-wrap" data-price-wrapper="">'+
										'<span data-product-price="" class="product-item__price ">'+
										'{{itemVendor}}'+
                                        '{{itemPrice}}'+
										'<div class="grid-view-item__reviews"><div class="yotpo bottomLine" data-appkey="......." data-domain="{{itemDomain}}" data-product-id="{{itemId}}" data-product-models="{{itemId}}" data-name="{{itemTitle}}" data-url="{{itemUrl}}" data-image-url="{{itemThumbUrl}}" data-description="{{itemDescription}}" data-bread-crumbs="{{itemTags}}"> </div></div>' +
										'</span>'+
									'</div>'+
								'</div>' +
                            '</div>',

    // List Template
    'vendorSmallListHtml': '<div class="list-view-item__vendor-column small--hide"><div class="list-view-item__vendor">{{itemVendorLabel}}</div></div>',
    'vendorMediumListHtml': '<div class="list-view-item__vendor medium-up--hide">{{itemVendorLabel}}</div>',
//     'saleLabelListHtml': '<div class="list-view-item__on-sale">' + bcSfFilterConfig.label.sale + '</div>',
//     'soldOutLabelListHtml': '<div class="list-view-item__sold-out">' + bcSfFilterConfig.label.sold_out + '</div>',
    'productListItemHtml':  '<a href="{{itemUrl}}" class="list-view-item">' +
                                '<div class="list-view-item__image-column">' +
                                    '<div class="list-view-item__image-wrapper">' +
                                        '<img class="list-view-item__image" src="{{itemThumbUrl}}" alt="{{itemTitle}}">' +
                                    '</div>' +
                                '</div>' +
                                '<div class="list-view-item__title-column">' +
                                    '<div class="list-view-item__title">' +
  										'{{itemTitle}}' +
  										//'<span class="smartwishlist" data-product="{{itemId}}" data-variant="{{itemFirstVariantId}}"></span>' +
  									'</div>' +
//                                     '{{itemSaleLabel}}' +
//                                     '{{itemMediumVendor}}' +
//                                     '{{itemSoldOutLabel}}' +
                                '</div>' +
                                '{{itemSmallVendor}}' +
                                '<div class="list-view-item__price-column">{{itemPrice}}</div>' +
                            '</a>',

    // Pagination Template
    'previousActiveHtml': '<li><a href="{{itemUrl}}">&larr;</a></li>',
    'previousDisabledHtml': '<li class="disabled"><span>&larr;</span></li>',
    'nextActiveHtml': '<li><a href="{{itemUrl}}">&rarr;</a></li>',
    'nextDisabledHtml': '<li class="disabled"><span>&rarr;</span></li>',
    'pageItemHtml': '<li><a href="{{itemUrl}}">{{itemTitle}}</a></li>',
    'pageItemSelectedHtml': '<li><span class="active">{{itemTitle}}</span></li>',
    'pageItemRemainHtml': '<li><span>{{itemTitle}}</span></li>',
    'paginateHtml': '<ul class="pagination-custom">{{previous}}{{pageItems}}{{next}}</ul>',

    // Sorting Template
    'sortingHtml': '<label class="label--hidden">' + bcSfFilterConfig.label.sorting + '</label><select class="collection-sort__input">{{sortingItems}}</select>',
};

/************************** BUILD PRODUCT LIST **************************/

// Build Product Grid Item
BCSfFilter.prototype.buildProductGridItem = function(data, index) {
    /*** Prepare data ***/
    var images = data.images_info;
    data.price_min *= 100, data.price_max *= 100, data.compare_at_price_min *= 100, data.compare_at_price_max *= 100; // Displaying price base on the policy of Shopify, have to multiple by 100
    var soldOut = !data.available; // Check a product is out of stock
    var onSale = data.compare_at_price_min > data.price_min; // Check a product is on sale
    var priceVaries = data.price_min != data.price_max; // Check a product has many prices
    // Get First Variant (selected_or_first_available_variant)
    var firstVariant = data['variants'][0];
    if (getParam('variant') !== null && getParam('variant') != '') {
        var paramVariant = data.variants.filter(function(e) { return e.id == getParam('variant'); });
        if (typeof paramVariant[0] !== 'undefined') firstVariant = paramVariant[0];
    } else {
        for (var i = 0; i < data['variants'].length; i++) {
            if (data['variants'][i].available) {
                firstVariant = data['variants'][i];
                break;
            }
        }
    }
    /*** End Prepare data ***/

    // Get Template
    var itemHtml = bcSfFilterTemplate.productGridItemHtml;
//     console.log(data);
	//var variant =
    // Add Thumbnail
    var itemThumbUrl = images.length > 0 ? this.optimizeImage(images[0]['src']) : bcSfFilterConfig.general.no_image_url;
    itemHtml = itemHtml.replace(/{{itemThumbUrl}}/g, itemThumbUrl);
    // variation
	var itemVariantsHtml = '';
	if (data.variants != '')  {
		itemVariantsHtml = '<noscript><select name="id">';
		for (var i = 0; i < data['variants'].length; i++) {
            if (data['variants'][i].available) {
                itemVariantsHtml += '<option value="'+data['variants'][i]['id']+'">'+data['variants'][i]['title']+'</option>';

            }
        }
		itemVariantsHtml += '</noscript></select>';
	}
	itemHtml = itemHtml.replace(/{{itemVariants}}/g, itemVariantsHtml);

	var itemVariationHtml = '';
	if (data.variants != '')  {
		itemVariationHtml = '<div class="product-item__size-wrap" data-custom-select="">';
        itemVariationHtml += '<div class="product-item__size-styled js_filter_drop" data-custom-select-free="" data-custom-select-styled="">';
        itemVariationHtml += 'See Available Sizes'
        itemVariationHtml += '</div>';
        itemVariationHtml += '<ul class="product-item__size-options" style="display: none;" data-custom-select-options="">';
		for (var i = 0; i < data['variants'].length; i++) {
            if (data['variants'][i].available) {
				if(i == 0){
				itemVariationHtml += '<li class="product-item__size-option">';
				itemVariationHtml += '<input type="radio" class="product-item__size-input" id="Option1-'+data['variants'][i]['title']+'-pid-{{itemId}}" name="id" value="'+data['variants'][i]['id']+'" checked="">';
                itemVariationHtml += '<label class="product-item__size-label " for="Option1-'+data['variants'][i]['title']+'-pid-{{itemId}}">'+data['variants'][i]['title']+'</label></li>';
				}else{
					itemVariationHtml += '<li class="product-item__size-option">';
				itemVariationHtml += '<input type="radio" class="product-item__size-input" id="Option1-'+data['variants'][i]['title']+'-pid-{{itemId}}" name="id" value="'+data['variants'][i]['id']+'" >';
                itemVariationHtml += '<label class="product-item__size-label " for="Option1-'+data['variants'][i]['title']+'-pid-{{itemId}}">'+data['variants'][i]['title']+'</label></li>';
				}

            }
        }
		itemVariationHtml += '</ul></div>';
	}
	itemHtml = itemHtml.replace(/{{itemVariation}}/g, itemVariationHtml);
	//console.log(data);
    // Add Price
    var itemPriceHtml = '';

//   	console.log(data.compare_at_price_min);
    if (data.title != '')  {
        itemPriceHtml += '<p class="grid-link__meta">';
        if (onSale) {
            itemPriceHtml += '<s class="grid-link__sale_price">' + this.formatMoney(data.compare_at_price_min/100) + '</s> ';
        }
        if (priceVaries) {
          console.log(itemPriceHtml);
//             itemPriceHtml += (bcSfFilterConfig.label.from_price).replace(/{{ price }}/g, this.formatMoney(data.price_min));
        } else {
            itemPriceHtml += this.formatMoney(data.price_min/100);
        }
        itemPriceHtml += '</p>';
    }
    itemHtml = itemHtml.replace(/{{itemPrice}}/g, itemPriceHtml);

    // Add soldOut class
    var soldOutClass = soldOut ? bcSfFilterTemplate.soldOutClass : '';
    itemHtml = itemHtml.replace(/{{soldOutClass}}/g, soldOutClass);

    // Add onSale class
    var saleClass = onSale ? bcSfFilterTemplate.saleClass : '';
    itemHtml = itemHtml.replace(/{{saleClass}}/g, saleClass);

    // Add soldOut Label
    var itemSoldOutLabelHtml = soldOut ? bcSfFilterTemplate.soldOutLabelHtml : '';
    itemHtml = itemHtml.replace(/{{itemSoldOutLabel}}/g, itemSoldOutLabelHtml);

    // Add onSale Label
    var itemSaleLabelHtml = onSale ? bcSfFilterTemplate.saleLabelHtml : '';
    itemHtml = itemHtml.replace(/{{itemSaleLabel}}/g, itemSaleLabelHtml);

    // Add Vendor
    var itemVendorHtml = bcSfFilterConfig.custom.vendor_enable ? bcSfFilterTemplate.vendorHtml.replace(/{{itemVendorLabel}}/g, data.vendor) : '';
    itemHtml = itemHtml.replace(/{{itemVendor}}/g, itemVendorHtml);

    // Build Domain
	itemHtml = itemHtml.replace(/{{itemDomain}}/g, this.escape(bcSfFilterConfig.shop.domain));

	// Build Description
	var itemDescription = data.description;
	itemDescription = itemDescription.substr(0, itemDescription.indexOf('##highlights##'));
	itemHtml = itemHtml.replace(/{{itemDescription}}/g, itemDescription);

	// Build Tags
	itemHtml = itemHtml.replace(/{{itemTags}}/g, this.escape(data.tags.join(';')));

	/* var itemWishlistHtml = '<div class="ssw-faveiticon sswfaveicon{{itemId}}"><i data-product-id="{{itemId}}" data-count="0" class="ssw-icon-heart-o ssw-fave-icon ssw-wishlist-element ssw-not-synch" title="Add to wishlist"  data-params=\'{"product_id":"{{itemId}}","event":"fave_button","page":"product_profile"}\'></i><span class="faves-count">...</span></div>';

itemHtml = itemHtml.replace(/{{itemWishlist}}/g, itemWishlistHtml);
	 */
   var itemWishlistHtml = '<script class="swym-product-view-snippet">';

    itemWishlistHtml += 'if(!window.SwymViewProducts){'

    itemWishlistHtml += 'window.SwymViewProducts = {};'

    itemWishlistHtml += '}';

    itemWishlistHtml += 'if(!window.SwymWatchProducts){';

    itemWishlistHtml += 'window.SwymWatchProducts = {};';

    itemWishlistHtml += '}';

    itemWishlistHtml += '(function(et){';

    itemWishlistHtml += 'var collections = ' + JSON.stringify(data.collections[0].title) + ';';

    itemWishlistHtml += 'var variants = [], currentVariant, variantPrice = ' + (data.price_min / 100) + ', stk;';

    itemWishlistHtml += 'if (variants.length == 0){';

    itemWishlistHtml += 'currentVariant = ' + JSON.stringify(firstVariant.id) + ';variants.push({ ' + JSON.stringify(firstVariant.title) + ' :' + JSON.stringify(firstVariant.id) + '});variantPrice = ' + (firstVariant.price / 100) + ';';

    itemWishlistHtml += 'stk = ' + firstVariant.inventory_quantity + ';';

    itemWishlistHtml += '}';

    itemWishlistHtml += 'var product_data = {';

    itemWishlistHtml += 'empi:' + JSON.stringify(data.id) + ',epi : currentVariant,';

    itemWishlistHtml += 'dt :' + JSON.stringify(data.title) + ',du  :"' + bcSfFilterConfig.shop.url + '{{itemUrl}}",';

    itemWishlistHtml += 'ct     :collections,pr     : variantPrice, stk: stk,';

    itemWishlistHtml += 'iu :' + JSON.stringify(this.getFeaturedImage(images)) + ',variants:variants';

    itemWishlistHtml += '};';

    itemWishlistHtml += 'SwymViewProducts[' + JSON.stringify(data.handle) + '] = SwymViewProducts[' + JSON.stringify(data.id) + '] = product_data;';

    itemWishlistHtml += 'var o = {};';

    for (var k in data.variants) {

        var variant = data['variants'][k]

        itemWishlistHtml += 'o[' + JSON.stringify(variant.id) + '] = {"id": ' + JSON.stringify(variant.id) + ',"inventory_management": ' + JSON.stringify(variant.inventory_management) + ',"inventory_quantity": ' + JSON.stringify(variant.inventory_quantity) + ',"title": ' + JSON.stringify(variant.title) + ', "inventory_policy": ' + JSON.stringify(variant.inventory_policy) + '};';

    }

    itemWishlistHtml += 'SwymWatchProducts[' + JSON.stringify(data.handle) + '] = SwymWatchProducts[' + JSON.stringify(data.id) + '] = o;';

    itemWishlistHtml += '})();';

    itemWishlistHtml += '</script>';

    itemWishlistHtml += '<button class="swym-button swym-add-to-wishlist-view-product product_{{itemId}}" data-swaction="addToWishlist" data-product-id="' + JSON.stringify(data.id)  +'"></button>';

    itemHtml = itemHtml.replace(/{{itemWishlist}}/g, itemWishlistHtml);



	// Add main attribute (Always put at the end of this function)
    itemHtml = itemHtml.replace(/{{itemId}}/g, data.id);
    itemHtml = itemHtml.replace(/{{itemHandle}}/g, data.handle);
    itemHtml = itemHtml.replace(/{{itemTitle}}/g, data.title);

    itemHtml = itemHtml.replace(/{{itemUrl}}/g, data.url);

    return itemHtml;
};

// Build Product List Item
// BCSfFilter.prototype.buildProductListItem = function(data) {
//     // // Add Description
//     // var itemDescription = jQ('<p>' + data.body_html + '</p>').text();
//     // // Truncate by word
//     // itemDescription = (itemDescription.split(" ")).length > 51 ? itemDescription.split(" ").splice(0, 51).join(" ") + '...' : itemDescription.split(" ").splice(0, 51).join(" ");
//     // // Truncate by character
//     // itemDescription = itemDescription.length > 350 ? itemDescription.substring(0, 350) + '...' : itemDescription.substring(0, 350);
//     // itemHtml = itemHtml.replace(/{{itemDescription}}/g, itemDescription);
// };


BCSfFilter.prototype.buildProductListItem = function(data) {
    /*** Prepare data ***/
    var images = data.images_info;
    data.price_min *= 100, data.price_max *= 100, data.compare_at_price_min *= 100, data.compare_at_price_max *= 100; // Displaying price base on the policy of Shopify, have to multiple by 100
    var soldOut = !data.available; // Check a product is out of stock
    var onSale = data.compare_at_price_min > data.price_min; // Check a product is on sale
    var priceVaries = data.price_min != data.price_max; // Check a product has many prices
    // Get First Variant (selected_or_first_available_variant)
    var firstVariant = data['variants'][0];
    if (getParam('variant') !== null && getParam('variant') != '') {
        var paramVariant = data.variants.filter(function(e) { return e.id == getParam('variant'); });
        if (typeof paramVariant[0] !== 'undefined') firstVariant = paramVariant[0];
    } else {
        for (var i = 0; i < data['variants'].length; i++) {
            if (data['variants'][i].available) {
                firstVariant = data['variants'][i];
                break;
            }
        }
    }
    /*** End Prepare data ***/

    // Get Template
    var itemHtml = bcSfFilterTemplate.productListItemHtml;

    // Add onSale label
    var itemSaleLabel = onSale ? bcSfFilterTemplate.saleLabelListHtml : '';
    itemHtml = itemHtml.replace(/{{itemSaleLabel}}/g, itemSaleLabel);

    // Add soldOut label
    var itemSoldOutLabel = soldOut ? bcSfFilterTemplate.soldOutLabelListHtml : '';
    itemHtml = itemHtml.replace(/{{itemSoldOutLabel}}/g, itemSoldOutLabel);

    // Add Thumbnail
    var itemThumbUrl = images.length > 0 ? this.optimizeImage(images[0]['src'], '600x600') : bcSfFilterConfig.general.no_image_url;
    itemHtml = itemHtml.replace(/{{itemThumbUrl}}/g, itemThumbUrl);

    // Add Vendor
    var itemSmallVendorHtml = bcSfFilterConfig.custom.vendor_enable ? bcSfFilterTemplate.vendorSmallListHtml : '';
    itemHtml = itemHtml.replace(/{{itemSmallVendor}}/g, itemSmallVendorHtml);
    var itemMediumVendorHtml = bcSfFilterConfig.custom.vendor_enable ? bcSfFilterTemplate.vendorMediumListHtml : '';
    itemHtml = itemHtml.replace(/{{itemMediumVendor}}/g, itemMediumVendorHtml);

    // Add Price
    var itemPriceHtml = buildPrice(data, onSale, priceVaries);
    itemHtml = itemHtml.replace(/{{itemPrice}}/g, itemPriceHtml);

    // Add main attribute
  	itemHtml = itemHtml.replace(/{{itemId}}/g, data.id);
  	itemHtml = itemHtml.replace(/{{itemFirstVariantId}}/g, firstVariant.id);
    itemHtml = itemHtml.replace(/{{itemTitle}}/g, data.title);
    itemHtml = itemHtml.replace(/{{itemVendorLabel}}/g, data.vendor);
    itemHtml = itemHtml.replace(/{{itemUrl}}/g, this.buildProductItemUrl(data));

    return itemHtml;
}

/************************** END BUILD PRODUCT LIST **************************/

// Build Pagination
BCSfFilter.prototype.buildPagination = function(totalProduct) {
  document.getElementById("ttlprod").textContent=totalProduct;
    if (this.getSettingValue('general.paginationType') == 'default') {
        // Get page info
        var currentPage = parseInt(this.queryParams.page);
        var totalPage = Math.ceil(totalProduct / this.queryParams.limit);

        // If it has only one page, clear Pagination
        if (totalPage == 1) {
            jQ(this.selector.bottomPagination).html('');
            return false;
        }

        if (this.getSettingValue('general.paginationType') == 'default') {
            var paginationHtml = bcSfFilterTemplate.paginateHtml;

            // Build Previous
            var previousHtml = (currentPage > 1) ? bcSfFilterTemplate.previousActiveHtml : bcSfFilterTemplate.previousDisabledHtml;
            previousHtml = previousHtml.replace(/{{itemUrl}}/g, this.buildToolbarLink('page', currentPage, currentPage - 1));
            paginationHtml = paginationHtml.replace(/{{previous}}/g, previousHtml);

            // Build Next
            var nextHtml = (currentPage < totalPage) ? bcSfFilterTemplate.nextActiveHtml :  bcSfFilterTemplate.nextDisabledHtml;
            nextHtml = nextHtml.replace(/{{itemUrl}}/g, this.buildToolbarLink('page', currentPage, currentPage + 1));
            paginationHtml = paginationHtml.replace(/{{next}}/g, nextHtml);

            // Create page items array
            var beforeCurrentPageArr = [];
            for (var iBefore = currentPage - 1; iBefore > currentPage - 2 && iBefore > 0; iBefore--) {
                beforeCurrentPageArr.unshift(iBefore);
            }
//             if (currentPage - 4 > 0) {
//                 beforeCurrentPageArr.unshift('...');
//             }
//             if (currentPage - 4 >= 0) {
//                 beforeCurrentPageArr.unshift(1);
//             }
            beforeCurrentPageArr.push(currentPage);

            var afterCurrentPageArr = [];
            for (var iAfter = currentPage + 1; iAfter < currentPage + 2 && iAfter <= totalPage; iAfter++) {
                afterCurrentPageArr.push(iAfter);
            }
//             if (currentPage + 3 < totalPage) {
//                 afterCurrentPageArr.push('...');
//             }
//             if (currentPage + 3 <= totalPage) {
//                 afterCurrentPageArr.push(totalPage);
//             }

            // Build page items
            var pageItemsHtml = '';
            var pageArr = beforeCurrentPageArr.concat(afterCurrentPageArr);
            for (var iPage = 0; iPage < pageArr.length; iPage++) {
                if (pageArr[iPage] == '...') {
                    pageItemsHtml += bcSfFilterTemplate.pageItemRemainHtml;
                } else {
                    pageItemsHtml += (pageArr[iPage] == currentPage) ? bcSfFilterTemplate.pageItemSelectedHtml : bcSfFilterTemplate.pageItemHtml;
                }
                pageItemsHtml = pageItemsHtml.replace(/{{itemTitle}}/g, pageArr[iPage]);
                pageItemsHtml = pageItemsHtml.replace(/{{itemUrl}}/g, this.buildToolbarLink('page', currentPage, pageArr[iPage]));
            }
            paginationHtml = paginationHtml.replace(/{{pageItems}}/g, pageItemsHtml);

            jQ(this.selector.bottomPagination).html(paginationHtml);
        }
    }
};





/************************** BUILD TOOLBAR **************************/

// Build Sorting
BCSfFilter.prototype.buildFilterSorting = function() {
    if (bcSfFilterTemplate.hasOwnProperty('sortingHtml')) {
        jQ(this.selector.topSorting).html('');

        var sortingArr = this.getSortingList();
        if (sortingArr) {
            // Build content
            var sortingItemsHtml = '';
            for (var k in sortingArr) {
                sortingItemsHtml += '<option value="' + k +'">' + sortingArr[k] + '</option>';
            }
            var html = bcSfFilterTemplate.sortingHtml.replace(/{{sortingItems}}/g, sortingItemsHtml);
            jQ(this.selector.topSorting).html(html);

            // Set current value
            jQ(this.selector.topSorting + ' select').val(this.queryParams.sort);
        }
    }
};

// // Build Display type (List / Grid / Collage)
// BCSfFilter.prototype.buildFilterDisplayType = function() {
//     var itemHtml = '<a href="' + this.buildToolbarLink('display', 'list', 'grid') + '" title="Grid view" class="change-view bc-sf-filter-display-grid" data-view="grid"><span class="icon-fallback-text"><i class="fa fa-th" aria-hidden="true"></i><span class="fallback-text">Grid view</span></span></a>';
//     itemHtml += '<a href="' + this.buildToolbarLink('display', 'grid', 'list') + '" title="List view" class="change-view bc-sf-filter-display-list" data-view="list"><span class="icon-fallback-text"><i class="fa fa-list" aria-hidden="true"></i><span class="fallback-text">List view</span></span></a>';
//     jQ(this.selector.topDisplayType).html(itemHtml);

//     // Active current display type
//     jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-list').removeClass('active');
//     jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-grid').removeClass('active');
//     if (this.queryParams.display == 'list') {
//         jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-list').addClass('active');
//     } else if (this.queryParams.display == 'grid') {
//         jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-grid').addClass('active');
//     }
// };

BCSfFilter.prototype.buildFilterDisplayType = function() {
//     var itemHtml = '<span>View As </span>';
    var itemHtml = '';
    itemHtml += '<div class="right-icons"><a href="' + this.buildToolbarLink('display', 'list', 'grid') + '" title="Grid view" class="bc-sf-filter-display-item bc-sf-filter-display-grid bc-sf-filter-sprite" data-view="grid"><i class="fa fa-th-large"></i></div></a>';
    itemHtml += '<div class="right-icons"><a href="' + this.buildToolbarLink('display', 'grid', 'list') + '" title="List view" class="bc-sf-filter-display-item bc-sf-filter-display-list bc-sf-filter-sprite" data-view="list"><i class="fa fa-bars"></i></div></a>';
    jQ(this.selector.topDisplayType).html(itemHtml);

    // Active current display type
    jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-list').removeClass('active');
    jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-grid').removeClass('active');
    if (this.queryParams.display == 'list') {
        jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-list').addClass('active');
    } else if (this.queryParams.display == 'grid') {
        jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-grid').addClass('active');
    }
};

/************************** END BUILD TOOLBAR **************************/

// Build Default layout
function buildDefaultLink(a,b){var c=window.location.href.split("?")[0];return c+="?"+a+"="+b}BCSfFilter.prototype.buildDefaultElements=function(a){if(bcSfFilterConfig.general.hasOwnProperty("collection_count")&&jQ("#bc-sf-filter-bottom-pagination").length>0){var b=bcSfFilterConfig.general.collection_count,c=parseInt(this.queryParams.page),d=Math.ceil(b/this.queryParams.limit);if(1==d)return jQ(this.selector.pagination).html(""),!1;if("default"==this.getSettingValue("general.paginationType")){var e=bcSfFilterTemplate.paginateHtml,f="";f=c>1?bcSfFilterTemplate.hasOwnProperty("previousActiveHtml")?bcSfFilterTemplate.previousActiveHtml:bcSfFilterTemplate.previousHtml:bcSfFilterTemplate.hasOwnProperty("previousDisabledHtml")?bcSfFilterTemplate.previousDisabledHtml:"",f=f.replace(/{{itemUrl}}/g,buildDefaultLink("page",c-1)),e=e.replace(/{{previous}}/g,f);var g="";g=c<d?bcSfFilterTemplate.hasOwnProperty("nextActiveHtml")?bcSfFilterTemplate.nextActiveHtml:bcSfFilterTemplate.nextHtml:bcSfFilterTemplate.hasOwnProperty("nextDisabledHtml")?bcSfFilterTemplate.nextDisabledHtml:"",g=g.replace(/{{itemUrl}}/g,buildDefaultLink("page",c+1)),e=e.replace(/{{next}}/g,g);for(var h=[],i=c-1;i>c-3&&i>0;i--)h.unshift(i);c-4>0&&h.unshift("..."),c-4>=0&&h.unshift(1),h.push(c);for(var j=[],k=c+1;k<c+3&&k<=d;k++)j.push(k);c+3<d&&j.push("..."),c+3<=d&&j.push(d);for(var l="",m=h.concat(j),n=0;n<m.length;n++)"..."==m[n]?l+=bcSfFilterTemplate.pageItemRemainHtml:l+=m[n]==c?bcSfFilterTemplate.pageItemSelectedHtml:bcSfFilterTemplate.pageItemHtml,l=l.replace(/{{itemTitle}}/g,m[n]),l=l.replace(/{{itemUrl}}/g,buildDefaultLink("page",m[n]));e=e.replace(/{{pageItems}}/g,l),jQ(this.selector.pagination).html(e)}}if(bcSfFilterTemplate.hasOwnProperty("sortingHtml")&&jQ(this.selector.topSorting).length>0){jQ(this.selector.topSorting).html("");var o=this.getSortingList();if(o){var p="";for(var q in o)p+='<option value="'+q+'">'+o[q]+"</option>";var r=bcSfFilterTemplate.sortingHtml.replace(/{{sortingItems}}/g,p);jQ(this.selector.topSorting).html(r);var s=void 0!==this.queryParams.sort_by?this.queryParams.sort_by:this.defaultSorting;jQ(this.selector.topSorting+" select").val(s),jQ(this.selector.topSorting+" select").change(function(a){window.location.href=buildDefaultLink("sort_by",jQ(this).val())})}}};

// Customize data to suit the data of Shopify API
BCSfFilter.prototype.prepareProductData=function(data){for(var k=0;k<data.length;k++){data[k]['images']=data[k]['images_info'];if(data[k]['images'].length>0){data[k]['featured_image']=data[k]['images'][0]}else{data[k]['featured_image']={src:bcSfFilterConfig.general.no_image_url,width:'',height:'',aspect_ratio:0}}data[k]['url']='/products/'+data[k].handle;var optionsArr=[];for(var i=0;i<data[k]['options_with_values'].length;i++){optionsArr.push(data[k]['options_with_values'][i]['name'])}data[k]['options']=optionsArr;data[k]['price_min']*=100,data[k]['price_max']*=100,data[k]['compare_at_price_min']*=100,data[k]['compare_at_price_max']*=100;data[k]['price']=data[k]['price_min'];data[k]['compare_at_price']=data[k]['compare_at_price_min'];data[k]['price_varies']=data[k]['price_min']!=data[k]['price_max'];var firstVariant=data[k]['variants'][0];if(getParam('variant')!==null&&getParam('variant')!=''){var paramVariant=data.variants.filter(function(e){return e.id==getParam('variant')});if(typeof paramVariant[0]!=='undefined')firstVariant=paramVariant[0]}else{for(var i=0;i<data[k]['variants'].length;i++){if(data[k]['variants'][i].available){firstVariant=data[k]['variants'][i];break}}}data[k]['selected_or_first_available_variant']=firstVariant;for(var i=0;i<data[k]['variants'].length;i++){var variantOptionArr=[];var count=1;var variant=data[k]['variants'][i];var variantOptions=variant['merged_options'];if(Array.isArray(variantOptions)){for(var j=0;j<variantOptions.length;j++){var temp=variantOptions[j].split(':');data[k]['variants'][i]['option'+(parseInt(j)+1)]=temp[1];data[k]['variants'][i]['option_'+temp[0]]=temp[1];variantOptionArr.push(temp[1])}data[k]['variants'][i]['options']=variantOptionArr}data[k]['variants'][i]['compare_at_price']=parseFloat(data[k]['variants'][i]['compare_at_price'])*100;data[k]['variants'][i]['price']=parseFloat(data[k]['variants'][i]['price'])*100}data[k]['description']=data[k]['content']=data[k]['body_html']}return data};

// Add additional feature for product list, used commonly in customizing product list
BCSfFilter.prototype.buildExtrasProductList = function(data, eventType) {
  if (window._swat) {
     window._swat.initializeActionButtons("#bc-sf-filter-products");
   } else {
     window.SwymCallbacks = window.SwymCallbacks || [];
     window.SwymCallbacks.push(function() {
       window._swat.initializeActionButtons("#bc-sf-filter-products");
     });
   }
  
	if (typeof Yotpo !== 'undefined') {
    var api = new Yotpo.API(yotpo);
    api.refreshWidgets();
  }
};

// Build additional elements
BCSfFilter.prototype.buildAdditionalElements = function(data, eventType) {};


function buildPrice(data, onSale, priceVaries) {
    var priceHtml = '';
    if (onSale) {
        if (priceVaries) {
            priceHtml += '<span class="visually-hidden">' + bcSfFilterConfig.label.regular_price + '</span>';
            priceHtml += '<s class="product-price__price">' + bcsffilter.formatMoney(data.compare_at_price_min/100, bcsffilter.moneyFormat) +'</s>';
            priceHtml += ' <span class="product-price__price product-price__sale">';
            priceHtml += '<span class="product__price">' + bcsffilter.formatMoney(data.price_min/100, bcsffilter.moneyFormat) + '</span>';
//             priceHtml += ' <span class="product-price__sale-label">' + bcSfFilterConfig.label.sale + '</span>';
            priceHtml += '</span>';
        } else {
            priceHtml += '<span class="visually-hidden">' + bcSfFilterConfig.label.regular_price + '</span>';
            priceHtml += '<s class="product-price__price">' + bcsffilter.formatMoney(data.compare_at_price_min/100, bcsffilter.moneyFormat) + '</s>';
            priceHtml += ' <span class="product-price__price product-price__sale">';
            priceHtml += bcsffilter.formatMoney(data.price_min/100, bcsffilter.moneyFormat);
//             priceHtml += ' <span class="product-price__sale-label">' + bcSfFilterConfig.label.sale + '</span>';
            priceHtml += '</span>';
        }
    } else {
        if (priceVaries) {
            priceHtml += '<span class="product__price">' + bcsffilter.formatMoney(data.price_min/100, bcsffilter.moneyFormat) + '</span>';
        } else {
            priceHtml += '<span class="visually-hidden">' + bcSfFilterConfig.label.regular_price + '</span>';
            priceHtml += '<span class="product-price__price">' + bcsffilter.formatMoney(data.price_min/100, bcsffilter.moneyFormat) + '</span>';
        }
    }
    return priceHtml;
}

BCSfFilter.prototype.afterBuildFilterTree = function(data, filterTreeId) {
        // Wrap all filter option blocks for styling
    jQ(this.getSelector('filterTree') + filterTreeId).children().wrapAll('<div id="bc-sf-filter-options-wrapper"></div>');
    // Box Style
    this.buildFilterOptionBoxStyle(null, filterTreeId);
    // Add scroll bar for block has long content, except the filter option which is range
    //this.buildFilterShowMore();
    // Collapse all filter options by default
    if (!this.checkIsFullWidthMobile()) this.collapseFilterOption();

  	console.log('testing')
  	this.removeScrollbar(jQ('.bc-sf-filter-option-block[data-type="opt_size"] .bc-sf-filter-block-content'));
  	var classArr = bcSfFilterConfig.custom.sizes;

  	for (var i = 0; i < classArr.length; i++) {
      	console.log(classArr[i].label);
      	jQ('.bc-sf-filter-option-block[data-type="opt_size"] .bc-sf-filter-block-content ul').append('<li class="sub-class"><div class="bc-sf-filter-block-title"><h3><span class="up">' + classArr[i].label + '</span></h3></div><ul style="display: none;" class="' + this.slugify(classArr[i].label) + '-size"></ul></li>');


//       	var option = data.find(function(e){return e.label.toLowerCase() == classArr[i]});
//       	if (typeof option != 'undefined') {
//             for (var j in option.manualValues) {
//                 var value = option.manualValues[j].toString();
//                 var $a = jQ('.bc-sf-filter-option-item[data-value="' + value + '"]');
//                 var $li = $a.parent();
//                 $li.detach().appendTo('.' + this.slugify(classArr[i]) + '-size').not(':last').remove();
//             }
//         }
    }

//   	jQ('.bc-sf-filter-option-block-size').attr('data-show-more-type', 'none');

//   	jQ('.sub-class').each(function(index){
//       	var $this = jQ(this);
//       	if ($this.find('.selected').length > 0) {
//           	$this.find('.bc-sf-filter-block-title span').removeClass('up');
//           	$this.find('ul').show();
//         }

//       	$this.show();
//       	if ($this.find('li').length < 1) {
//           	$this.hide();
//         }
//     });

  	this.buildFilterShowMore();
};





// Override Settings
// var bcSfFilterSettings = {
//     general: {
//         limit: bcSfFilterConfig.custom.products_per_page,
//         // Optional
//         loadProductFirst: true,
//         styleScrollToTop: 'style2',
//         //filterTreeMobileStyle: 'style2',
//       	showPlaceholderProductList: true,
//     },
// };

// var bcSfFilterTemplate = {
//     'soldOutClass': 'product-price--sold-out grid-view-item--sold-out',

//     // Grid Template
//     'vendorGridHtml': '<div class="grid-view-item__vendor">{{itemVendorLabel}}</div>',
//     'soldOutLabelGridHtml': ' <span class="product-price__sold-out">' + bcSfFilterConfig.label.sold_out + '</span>',
//     'productGridItemHtml': '<div class="grid__item {{itemGridWidthClass}}">' +
//                                 '<div class="grid-view-item {{itemSoldOutClass}}">' +
//   									'<script class="bc-sf-filter-product-script" data-id="bc-product-json-{{itemId}}" type="application/json">{{itemJson}}</script>' +
//                                     '<a class="grid-view-item__link" href="{{itemUrl}}">' +
//                                         '{{imageStyle}}' +
//                                         '{{itemImages}}' +
//                                         '<div class="h4 grid-view-item__title">{{itemTitle}}</div>' +
//                                         '{{itemVendor}}' +
//                                         '<div class="grid-view-item__meta">{{itemPrice}}{{itemSoldOutLabel}}</div>' +
//   										'<span class="shopify-product-reviews-badge" data-id="{{itemId}}"></span>' +
//                                     '</a>' +
//                                 '</div>' +
//                             '</div>',

//     // List Template
//     'vendorSmallListHtml': '<div class="list-view-item__vendor-column small--hide"><div class="list-view-item__vendor">{{itemVendorLabel}}</div></div>',
//     'vendorMediumListHtml': '<div class="list-view-item__vendor medium-up--hide">{{itemVendorLabel}}</div>',
//     'saleLabelListHtml': '<div class="list-view-item__on-sale">' + bcSfFilterConfig.label.sale + '</div>',
//     'soldOutLabelListHtml': '<div class="list-view-item__sold-out">' + bcSfFilterConfig.label.sold_out + '</div>',
//     'productListItemHtml':  '<a href="{{itemUrl}}" class="list-view-item">' +
//                                 '<div class="list-view-item__image-column">' +
//                                     '<div class="list-view-item__image-wrapper">' +
//                                         '<img class="list-view-item__image" src="{{itemThumbUrl}}" alt="{{itemTitle}}">' +
//                                     '</div>' +
//                                 '</div>' +
//                                 '<div class="list-view-item__title-column">' +
//                                     '<div class="list-view-item__title">' +
//   										'{{itemTitle}}' +
//   										//'<span class="smartwishlist" data-product="{{itemId}}" data-variant="{{itemFirstVariantId}}"></span>' +
//   									'</div>' +
//                                     '{{itemSaleLabel}}' +
//                                     '{{itemMediumVendor}}' +
//                                     '{{itemSoldOutLabel}}' +
//                                 '</div>' +
//                                 '{{itemSmallVendor}}' +
//                                 '<div class="list-view-item__price-column">{{itemPrice}}</div>' +
//                             '</a>',

//     // Pagination Template
//     'previousActiveHtml': '<li><a href="{{itemUrl}}" class="btn btn--secondary btn--narrow"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon--wide icon-arrow-left" viewBox="0 0 20 8"><path d="M4.814 7.555C3.95 6.61 3.2 5.893 2.568 5.4 1.937 4.91 1.341 4.544.781 4.303v-.44a9.933 9.933 0 0 0 1.875-1.196c.606-.485 1.328-1.196 2.168-2.134h.752c-.612 1.309-1.253 2.315-1.924 3.018H19.23v.986H3.652c.495.632.84 1.1 1.036 1.406.195.306.485.843.869 1.612h-.743z" fill="#000" fill-rule="evenodd"></path></svg><span class="icon__fallback-text">Previous</span></a></li>',
//     'previousDisabledHtml': '<li><div class="btn btn--secondary btn--narrow btn--disabled"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon--wide icon-arrow-left" viewBox="0 0 20 8"><path d="M4.814 7.555C3.95 6.61 3.2 5.893 2.568 5.4 1.937 4.91 1.341 4.544.781 4.303v-.44a9.933 9.933 0 0 0 1.875-1.196c.606-.485 1.328-1.196 2.168-2.134h.752c-.612 1.309-1.253 2.315-1.924 3.018H19.23v.986H3.652c.495.632.84 1.1 1.036 1.406.195.306.485.843.869 1.612h-.743z" fill="#000" fill-rule="evenodd"></path></svg><span class="icon__fallback-text">Previous</span></div></li>',
//     'nextActiveHtml': '<li><a href="{{itemUrl}}" class="btn btn--secondary btn--narrow"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon--wide icon-arrow-right" viewBox="0 0 20 8"><path d="M15.186.445c.865.944 1.614 1.662 2.246 2.154.631.491 1.227.857 1.787 1.098v.44a9.933 9.933 0 0 0-1.875 1.196c-.606.485-1.328 1.196-2.168 2.134h-.752c.612-1.309 1.253-2.315 1.924-3.018H.77v-.986h15.577c-.495-.632-.84-1.1-1.035-1.406-.196-.306-.486-.843-.87-1.612h.743z" fill="#000" fill-rule="evenodd"></path></svg><span class="icon__fallback-text">Next</span></a></li>',
//     'nextDisabledHtml': '<li><div class="btn btn--secondary btn--narrow btn--disabled"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon--wide icon-arrow-right" viewBox="0 0 20 8"><path d="M15.186.445c.865.944 1.614 1.662 2.246 2.154.631.491 1.227.857 1.787 1.098v.44a9.933 9.933 0 0 0-1.875 1.196c-.606.485-1.328 1.196-2.168 2.134h-.752c.612-1.309 1.253-2.315 1.924-3.018H.77v-.986h15.577c-.495-.632-.84-1.1-1.035-1.406-.196-.306-.486-.843-.87-1.612h.743z" fill="#000" fill-rule="evenodd"></path></svg><span class="icon__fallback-text">Next</span></div></li>',
//     'paginateHtml': '<ul class="list--inline pagination clearfix">{{previous}}<li class="pagination__text">{{pageItems}}</li>{{next}}</ul>',

//     // Sorting Template
//     'sortingHtml': '<label class="label--hidden">' + bcSfFilterConfig.label.sorting + '</label><select class="filters-toolbar__input filters-toolbar__input--sort">{{sortingItems}}</select>',
// };

// BCSfFilter.prototype.buildProductGridItem = function(data) {
//     /*** Prepare data ***/
//     var images = data.images_info;
//     data.price_min *= 100, data.price_max *= 100, data.compare_at_price_min *= 100, data.compare_at_price_max *= 100; // Displaying price base on the policy of Shopify, have to multiple by 100
//     var soldOut = !data.available; // Check a product is out of stock
//     var onSale = data.compare_at_price_min > data.price_min; // Check a product is on sale
//     var priceVaries = data.price_min != data.price_max; // Check a product has many prices
//     // Get First Variant (selected_or_first_available_variant)
//     var firstVariant = data['variants'][0];
//     if (getParam('variant') !== null && getParam('variant') != '') {
//         var paramVariant = data.variants.filter(function(e) { return e.id == getParam('variant'); });
//         if (typeof paramVariant[0] !== 'undefined') firstVariant = paramVariant[0];
//     } else {
//         for (var i = 0; i < data['variants'].length; i++) {
//             if (data['variants'][i].available) {
//                 firstVariant = data['variants'][i];
//                 break;
//             }
//         }
//     }
//     /*** End Prepare data ***/

//     // Get Template
//     var itemHtml = bcSfFilterTemplate.productGridItemHtml;

//     // Add a specific class for grid item
//     var itemGridWidthClass = '';
//     var imageSize = '600x600';
//     switch(bcSfFilterConfig.custom.products_per_row) {
//         case 2:
//             itemGridWidthClass = 'medium-up--one-half';
//             imageSize = '540x600';
//             break;
//         case 3:
//             itemGridWidthClass = 'small--one-half medium-up--one-third';
//             imageSize = '375x550';
//             break;
//         case 4:
//             itemGridWidthClass = 'small--one-half medium-up--one-quarter';
//             imageSize = '345x';
//             break;
//         case 5:
//             itemGridWidthClass = 'small--one-half medium-up--one-fifth';
//             imageSize = '195x';
//             break;
//     }
//     itemHtml = itemHtml.replace(/{{itemGridWidthClass}}/g, itemGridWidthClass);

//     // Add soldOut class
//     var itemSoldOutClass = soldOut ? bcSfFilterTemplate.soldOutClass : '';
//     itemHtml = itemHtml.replace(/{{itemSoldOutClass}}/g, itemSoldOutClass);

//     // Add soldOut label
//     var itemSoldOutLabel = soldOut ? bcSfFilterTemplate.soldOutLabelGridHtml : '';
//     itemHtml = itemHtml.replace(/{{itemSoldOutLabel}}/g, itemSoldOutLabel);

//     var img_id = 'ProductCardImage-{{itemId}}';
//     var wrapper_id = 'ProductCardImageWrapper-{{itemId}}';

//     // Build Image style
//     var imageStyle = buildImageStyle(data);
//     itemHtml = itemHtml.replace(/{{imageStyle}}/g, imageStyle);

//     // Add Images
//     var aspect_ratio = '';
//     var itemImagesHtml = '<div id="' + wrapper_id + '" class="grid-view-item__image-wrapper js">';
//     itemImagesHtml += '<div style="padding-top:';
//     if (images.length > 0) {
//         aspect_ratio = images[0]['width'] / images[0]['height'];
//         itemImagesHtml += 1 / aspect_ratio * 100;
//     } else {
//         itemImagesHtml += 100;
//     }
//     itemImagesHtml += '%;">';
//     itemImagesHtml += '<img id="' + img_id + '" ' +
//                         'class="grid-view-item__image lazyload" ' +
//                         'src="' + this.getFeaturedImage(images, '300x300') + '" ' +
//                         'data-src="' + this.getFeaturedImage(images, '{width}x') + '" ' +
//                         'data-widths="[250, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" ' +
//                         'data-aspectratio="' + aspect_ratio + '" ' +
//                         'data-sizes="auto" ' +
//                         'alt="{{itemTitle}}">';
//   	//itemImagesHtml += '<span class="smartwishlist" data-product="{{itemId}}" data-variant="' + firstVariant.id + '"></span>';
//     itemImagesHtml += '</div>';
//     itemImagesHtml += '</div>';

//     var image_size = bcSfFilterConfig.custom.max_height + 'x' + bcSfFilterConfig.custom.max_height;
//     var max_width = images.length > 0 ? bcSfFilterConfig.custom.max_height * aspect_ratio : 0;
//     itemImagesHtml += '<noscript><img class="grid-view-item__image" src="' + this.getFeaturedImage(images, image_size + '@2x') + '" alt="{{itemTitle}}" style="max-width: ' + max_width + 'px;"></noscript>';
//     itemHtml = itemHtml.replace(/{{itemImages}}/g, itemImagesHtml);

//     // Add Vendor
//     var itemVendorHtml = bcSfFilterConfig.custom.vendor_enable ? bcSfFilterTemplate.vendorGridHtml : '';
//     itemHtml = itemHtml.replace(/{{itemVendor}}/g, itemVendorHtml);

//     // Add Price
//     var itemPriceHtml = buildPrice(data, onSale, priceVaries);
//     itemHtml = itemHtml.replace(/{{itemPrice}}/g, itemPriceHtml);

//   	// Add data json
//     var self = this;
//     var itemJson = {
//       "id": data.id,
//       "title": data.title,
//       "handle": data.handle,
//       "vendor": data.vendor,
//       "variants": data.variants,
//       "url": self.buildProductItemUrl(data),
//       "options_with_values": data.options_with_values,
//       "images": data.images,
//       "available": data.available,
//       "price_min": data.price_min,
//   		"price_max": data.price_max,
//   		"compare_at_price_min": data.compare_at_price_min,
//   		"compare_at_price_max": data.compare_at_price_max
//     };
//     itemHtml = itemHtml.replace(/{{itemJson}}/g, JSON.stringify(itemJson));

//     // Add main attribute
//     itemHtml = itemHtml.replace(/{{itemId}}/g, data.id);
//     itemHtml = itemHtml.replace(/{{itemTitle}}/g, data.title);
//     itemHtml = itemHtml.replace(/{{itemVendorLabel}}/g, data.vendor);
//     itemHtml = itemHtml.replace(/{{itemUrl}}/g, this.buildProductItemUrl(data));

//     return itemHtml;
// }

// // Build Image style
// function buildImageStyle(data) {
//     var images = data.images_info;
//     var img_id = 'ProductCardImage-{{itemId}}';
//     var wrapper_id = 'ProductCardImageWrapper-{{itemId}}';
//     var imageStyle = '';
//     if (images.length > 0) {
//         var image = images[0];
//         var width = bcSfFilterConfig.custom.max_height;
//         var height = bcSfFilterConfig.custom.max_height;
//         var aspect_ratio = image.width / image.height;
//         var small_style = true;
//         var container_aspect_ratio = width * 1.0 / height;

//         if (image.aspect_ratio < 1.0) {
//             var maximum_width = height * aspect_ratio;
//             if (image.height <= height) {
//                 var maximum_height = image.height;
//                 maximum_width = image.width;
//             } else {
//                 var maximum_height = height;
//             }
//         } else if (aspect_ratio < container_aspect_ratio) {
//             var maximum_height = height / aspect_ratio;
//             if (image.height <= height) {
//                 var maximum_height = image.height;
//                 var maximum_width = image.width;
//             } else {
//                 var maximum_height = height;
//                 var maximum_width = height * aspect_ratio;
//             }
//         } else {
//             var maximum_height = height / aspect_ratio;
//             if (image.width <= width) {
//                 maximum_height = image.height;
//                 var maximum_width = image.width
//             } else {
//                 var maximum_width = width;
//                 maximum_height = maximum_width / aspect_ratio;
//             }
//         }

//         imageStyle += '<style>';
//         if (small_style) imageStyle += '@media screen and (min-width: 750px) {';
//         imageStyle +=   '#' + img_id + ' {' +
//                             'max-width: ' + maximum_width + 'px;' +
//                             'max-height: ' + maximum_height + 'px;' +
//                         '}' +
//                         '#' + wrapper_id + ' {' +
//                             'max-width: ' + maximum_width + 'px;' +
//                             'max-height: ' + maximum_height + 'px;' +
//                         '}';
//         if (small_style) imageStyle += '}';

//         if (small_style) {
//             if (aspect_ratio < 1) {
//                 maximum_width = 750 * aspect_ratio;
//             } else {
//                 if (image.width < 750) {
//                     maximum_width = image.width;
//                 } else {
//                     maximum_width = 750;
//                 }
//             }
//             imageStyle += '@media screen and (max-width: 749px) {'
//             imageStyle +=   '#' + img_id + ' {' +
//                                 'max-width: ' + maximum_width + 'px;' +
//                                 'max-height: 750px;' +
//                             '}' +
//                             '#' + wrapper_id + ' {' +
//                                 'max-width: ' + maximum_width + 'px;' +
//                             '}';
//             imageStyle += '}';
//         }
//         imageStyle += '</style>';
//     }
//     return imageStyle;
// }

// BCSfFilter.prototype.buildProductListItem = function(data) {
//     /*** Prepare data ***/
//     var images = data.images_info;
//     data.price_min *= 100, data.price_max *= 100, data.compare_at_price_min *= 100, data.compare_at_price_max *= 100; // Displaying price base on the policy of Shopify, have to multiple by 100
//     var soldOut = !data.available; // Check a product is out of stock
//     var onSale = data.compare_at_price_min > data.price_min; // Check a product is on sale
//     var priceVaries = data.price_min != data.price_max; // Check a product has many prices
//     // Get First Variant (selected_or_first_available_variant)
//     var firstVariant = data['variants'][0];
//     if (getParam('variant') !== null && getParam('variant') != '') {
//         var paramVariant = data.variants.filter(function(e) { return e.id == getParam('variant'); });
//         if (typeof paramVariant[0] !== 'undefined') firstVariant = paramVariant[0];
//     } else {
//         for (var i = 0; i < data['variants'].length; i++) {
//             if (data['variants'][i].available) {
//                 firstVariant = data['variants'][i];
//                 break;
//             }
//         }
//     }
//     /*** End Prepare data ***/

//     // Get Template
//     var itemHtml = bcSfFilterTemplate.productListItemHtml;

//     // Add onSale label
//     var itemSaleLabel = onSale ? bcSfFilterTemplate.saleLabelListHtml : '';
//     itemHtml = itemHtml.replace(/{{itemSaleLabel}}/g, itemSaleLabel);

//     // Add soldOut label
//     var itemSoldOutLabel = soldOut ? bcSfFilterTemplate.soldOutLabelListHtml : '';
//     itemHtml = itemHtml.replace(/{{itemSoldOutLabel}}/g, itemSoldOutLabel);

//     // Add Thumbnail
//     var itemThumbUrl = images.length > 0 ? this.optimizeImage(images[0]['src'], '600x600') : bcSfFilterConfig.general.no_image_url;
//     itemHtml = itemHtml.replace(/{{itemThumbUrl}}/g, itemThumbUrl);

//     // Add Vendor
//     var itemSmallVendorHtml = bcSfFilterConfig.custom.vendor_enable ? bcSfFilterTemplate.vendorSmallListHtml : '';
//     itemHtml = itemHtml.replace(/{{itemSmallVendor}}/g, itemSmallVendorHtml);
//     var itemMediumVendorHtml = bcSfFilterConfig.custom.vendor_enable ? bcSfFilterTemplate.vendorMediumListHtml : '';
//     itemHtml = itemHtml.replace(/{{itemMediumVendor}}/g, itemMediumVendorHtml);

//     // Add Price
//     var itemPriceHtml = buildPrice(data, onSale, priceVaries);
//     itemHtml = itemHtml.replace(/{{itemPrice}}/g, itemPriceHtml);

//     // Add main attribute
//   	itemHtml = itemHtml.replace(/{{itemId}}/g, data.id);
//   	itemHtml = itemHtml.replace(/{{itemFirstVariantId}}/g, firstVariant.id);
//     itemHtml = itemHtml.replace(/{{itemTitle}}/g, data.title);
//     itemHtml = itemHtml.replace(/{{itemVendorLabel}}/g, data.vendor);
//     itemHtml = itemHtml.replace(/{{itemUrl}}/g, this.buildProductItemUrl(data));

//     return itemHtml;
// }

// function buildPrice(data, onSale, priceVaries) {
//     var priceHtml = '';
//     if (onSale) {
//         if (priceVaries) {
//             priceHtml += '<span class="visually-hidden">' + bcSfFilterConfig.label.regular_price + '</span>';
//             priceHtml += '<s class="product-price__price">' + bcsffilter.formatMoney(data.compare_at_price_min, bcsffilter.moneyFormat) +'</s>';
//             priceHtml += ' <span class="product-price__price product-price__sale">';
//             priceHtml += '<span class="product__price">' + bcsffilter.formatMoney(data.price_min, bcsffilter.moneyFormat) + '</span>';
//             priceHtml += ' <span class="product-price__sale-label">' + bcSfFilterConfig.label.sale + '</span>';
//             priceHtml += '</span>';
//         } else {
//             priceHtml += '<span class="visually-hidden">' + bcSfFilterConfig.label.regular_price + '</span>';
//             priceHtml += '<s class="product-price__price">' + bcsffilter.formatMoney(data.compare_at_price_min, bcsffilter.moneyFormat) + '</s>';
//             priceHtml += ' <span class="product-price__price product-price__sale">';
//             priceHtml += bcsffilter.formatMoney(data.price_min, bcsffilter.moneyFormat);
//             priceHtml += ' <span class="product-price__sale-label">' + bcSfFilterConfig.label.sale + '</span>';
//             priceHtml += '</span>';
//         }
//     } else {
//         if (priceVaries) {
//             priceHtml += '<span class="product__price">' + bcsffilter.formatMoney(data.price_min, bcsffilter.moneyFormat) + '</span>';
//         } else {
//             priceHtml += '<span class="visually-hidden">' + bcSfFilterConfig.label.regular_price + '</span>';
//             priceHtml += '<span class="product-price__price">' + bcsffilter.formatMoney(data.price_min, bcsffilter.moneyFormat) + '</span>';
//         }
//     }
//     return priceHtml;
// }

// // Customize data to suit the data of Shopify API
// BCSfFilter.prototype.prepareProductData = function(data) {
//     for (var k in data) {
//         // Featured image
//         if (data['images_info'] > 0) {
//             data[k]['featured_image'] = data['images_info'][0];
//         } else {
//             data[k]['featured_image'] = {width: '', height: '', aspect_ratio: 0}
//         }

//         // Add Options
//         var optionsArr = [];
//         for (var i in data[k]['options_with_values']) {
//             optionsArr.push(data[k]['options_with_values'][i]['name']);
//         }
//         data[k]['options'] = optionsArr;

//         // Customize variants
//         for (var i in data[k]['variants']) {
//             var variantOptionArr = [];
//             var count = 1;
//             var variant = data[k]['variants'][i];
//             // Add Options
//             var variantOptions = variant['merged_options'];
//             if (Array.isArray(variantOptions)) {
//                 for (var j = 0; j < variantOptions.length; j++) {
//                     var temp = variantOptions[j].split(':');
//                     data[k]['variants'][i]['option' + (parseInt(j) + 1)] = temp[1];
//                     data[k]['variants'][i]['option_' + temp[0]] = temp[1];
//                     variantOptionArr.push(temp[1]);
//                 }
//                 data[k]['variants'][i]['options'] = variantOptionArr;
//             }
//             data[k]['variants'][i]['compare_at_price'] = parseFloat(data[k]['variants'][i]['compare_at_price']) * 100;
//             data[k]['variants'][i]['price'] = parseFloat(data[k]['variants'][i]['price']) * 100;
//         }

//         // Add Description
//         data[k]['description'] = data[k]['body_html'];
//     }
//     return data;
// };

// // Build Pagination
// BCSfFilter.prototype.buildPagination = function(totalProduct) {
//     // Get page info
//     var currentPage = parseInt(this.queryParams.page);
//     var totalPage = Math.ceil(totalProduct / this.queryParams.limit);

//     // If it has only one page, clear Pagination
//     if (totalPage == 1) {
//         jQ(this.selector.bottomPagination).html('');
//         return false;
//     }

//     if (this.getSettingValue('general.paginationType') == 'default') {
//         var paginationHtml = bcSfFilterTemplate.paginateHtml;

//         // Build Previous
//         var previousHtml = (currentPage > 1) ? bcSfFilterTemplate.previousActiveHtml : bcSfFilterTemplate.previousDisabledHtml;
//         previousHtml = previousHtml.replace(/{{itemUrl}}/g, this.buildToolbarLink('page', currentPage, currentPage -1));
//         paginationHtml = paginationHtml.replace(/{{previous}}/g, previousHtml);

//         // Build Next
//         var nextHtml = (currentPage < totalPage) ? bcSfFilterTemplate.nextActiveHtml :  bcSfFilterTemplate.nextDisabledHtml;
//         nextHtml = nextHtml.replace(/{{itemUrl}}/g, this.buildToolbarLink('page', currentPage, currentPage + 1));
//         paginationHtml = paginationHtml.replace(/{{next}}/g, nextHtml);

//         // Build page items
//         paginationHtml = paginationHtml.replace(/{{pageItems}}/g, 'Page ' + currentPage + ' of ' + totalPage);

//         jQ(this.selector.bottomPagination).html(paginationHtml);
//     }
// };

// // Build Sorting
// BCSfFilter.prototype.buildFilterSorting = function() {
//     if (bcSfFilterTemplate.hasOwnProperty('sortingHtml')) {
//         jQ(this.selector.topSorting).html('');

//         var sortingArr = this.getSortingList();
//         if (sortingArr) {
//             // Build content
//             var sortingItemsHtml = '';
//             for (var k in sortingArr) {
//                 sortingItemsHtml += '<option value="' + k +'">' + sortingArr[k] + '</option>';
//             }
//             var html = bcSfFilterTemplate.sortingHtml.replace(/{{sortingItems}}/g, sortingItemsHtml);
//             jQ(this.selector.topSorting).html(html);

//             // Set current value
//             jQ(this.selector.topSorting + ' select').val(this.queryParams.sort);
//         }
//     }
// };

// // Build Display type
// BCSfFilter.prototype.buildFilterDisplayType = function() {
//     var itemHtml = '<span>View As </span>';
//     itemHtml += '<a href="' + this.buildToolbarLink('display', 'list', 'grid') + '" title="Grid view" class="bc-sf-filter-display-item bc-sf-filter-display-grid bc-sf-filter-sprite" data-view="grid"><span class="icon-fallback-text"><i class="fa fa-th" aria-hidden="true"></i><span class="fallback-text">Grid view</span></span></a>';
//     itemHtml += '<a href="' + this.buildToolbarLink('display', 'grid', 'list') + '" title="List view" class="bc-sf-filter-display-item bc-sf-filter-display-list bc-sf-filter-sprite" data-view="list"><span class="icon-fallback-text"><i class="fa fa-list" aria-hidden="true"></i><span class="fallback-text">List view</span></span></a>';
//     jQ(this.selector.topDisplayType).html(itemHtml);

//     // Active current display type
//     jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-list').removeClass('active');
//     jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-grid').removeClass('active');
//     if (this.queryParams.display == 'list') {
//         jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-list').addClass('active');
//     } else if (this.queryParams.display == 'grid') {
//         jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-grid').addClass('active');
//     }
// };

// // Add additional feature for product list, used commonly in customizing product list
// BCSfFilter.prototype.buildExtrasProductList = function(data) {
//     jQ('#bc-sf-filter-products').removeClass();
//     if (this.queryParams.display == 'list') {
//         jQ('#bc-sf-filter-products').addClass('list-view-items');
//     } else {
//         jQ('#bc-sf-filter-products').addClass('grid grid--uniform grid--view-items');
//     }

//   	// Integrate Product Reviews
//   	!function(){var e=function(e){var t={exports:{}};return e.call(t.exports,t,t.exports),t.exports};e(function(){"use strict";window.innerShiv=function(){function e(e,t,r){return/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i.test(r)?e:t+"></"+r+">"}var t,r,a=document,i="abbr article aside audio canvas datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video".split(" ");return function(n,s){if(!t&&(t=a.createElement("div"),t.innerHTML="<nav></nav>",r=1!==t.childNodes.length)){for(var o=a.createDocumentFragment(),d=i.length;d--;)o.createElement(i[d]);o.appendChild(t)}if(n=n.replace(/^\s\s*/,"").replace(/\s\s*$/,"").replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"").replace(/(<([\w:]+)[^>]*?)\/>/g,e),t.innerHTML=(o=n.match(/^<(tbody|tr|td|col|colgroup|thead|tfoot)/i))?"<table>"+n+"</table>":n,o=o?t.getElementsByTagName(o[1])[0].parentNode:t,!1===s)return o.childNodes;for(var d=a.createDocumentFragment(),u=o.childNodes.length;u--;)d.appendChild(o.firstChild);return d}}()});(function(){window.SPR=function(){function e(){}return e.shop=Shopify.shop,e.host="//productreviews.shopifycdn.com",e.version="v4",e.api_url=e.host+"/proxy/"+e.version,e.badgeEls=[],e.reviewEls=[],e.elSettings={},e.$=void 0,e.extraAjaxParams={shop:e.shop},e.registerCallbacks=function(){return this.$(document).bind("spr:badge:loaded","undefined"!=typeof SPRCallbacks&&null!==SPRCallbacks?SPRCallbacks.onBadgeLoad:void 0),this.$(document).bind("spr:product:loaded","undefined"!=typeof SPRCallbacks&&null!==SPRCallbacks?SPRCallbacks.onProductLoad:void 0),this.$(document).bind("spr:reviews:loaded","undefined"!=typeof SPRCallbacks&&null!==SPRCallbacks?SPRCallbacks.onReviewsLoad:void 0),this.$(document).bind("spr:form:loaded","undefined"!=typeof SPRCallbacks&&null!==SPRCallbacks?SPRCallbacks.onFormLoad:void 0),this.$(document).bind("spr:form:success","undefined"!=typeof SPRCallbacks&&null!==SPRCallbacks?SPRCallbacks.onFormSuccess:void 0),this.$(document).bind("spr:form:failure","undefined"!=typeof SPRCallbacks&&null!==SPRCallbacks?SPRCallbacks.onFormFailure:void 0)},e.loadStylesheet=function(){var e,t;return t=document.createElement("link"),t.setAttribute("rel","stylesheet"),t.setAttribute("type","text/css"),t.setAttribute("href","https://productreviews.shopifycdn.com/assets/v4/spr-5a2d2fd286dca8042a3a5a76bc9032c64c52a2792a734307c76740d012641514.css"),t.setAttribute("media","screen"),e=document.getElementsByTagName("head")[0],e.appendChild(t)},e.initRatingHandler=function(){return e.$(document).on("mouseover mouseout","form a.spr-icon-star",function(t){var r,a,i;return r=t.currentTarget,i=e.$(r).attr("data-value"),a=e.$(r).parent(),"mouseover"===t.type?(a.find("a.spr-icon:lt("+i+")").addClass("spr-icon-star-hover"),a.find("a.spr-icon:gt("+(i-1)+")").removeClass("spr-icon-star-hover")):a.find("a.spr-icon").removeClass("spr-icon-star-hover")})},e.initDomEls=function(){return this.badgeEls=this.$(".shopify-product-reviews-badge[data-id]"),this.reviewEls=this.$("#shopify-product-reviews[data-id]"),this.$.each(this.reviewEls,function(e){return function(t,r){var a;return a=e.$(r).attr("data-id"),e.elSettings[a]={},e.elSettings[a].reviews_el="#"+(e.$(r).attr("data-reviews-prefix")?e.$(r).attr("data-reviews-prefix"):"reviews_"),e.elSettings[a].form_el="#"+(e.$(r).attr("data-form-prefix")?e.$(r).attr("data-form-prefix"):"form_")}}(this))},e.loadProducts=function(){return this.$.each(this.reviewEls,function(e){return function(t,r){var a,i;if(a=e.$(r).attr("data-id"),"false"!==e.$(r).attr("data-autoload"))return i=e.$.extend({product_id:a,version:e.version},e.extraAjaxParams),e.$.get(e.api_url+"/reviews/product",i,e.productCallback,"jsonp")}}(this))},e.loadBadges=function(){var e,t,r,a,i;if(r=this.$.map(this.badgeEls,function(e){return function(t){return e.$(t).attr("data-id")}}(this)),r.length>0){for(t=7,i=[];(e=r.splice(0,t)).length>0;)a=this.$.extend(this.extraAjaxParams,{product_ids:e}),i.push(this.$.get(this.api_url+"/reviews/badges",a,this.badgesCallback,"jsonp"));return i}},e.pageReviews=function(e){var t,r,a;return a=this.$(e).data("product-id"),r=this.$(e).data("page"),t=this.$.extend({page:r,product_id:a},this.extraAjaxParams),this.$.get(this.api_url+"/reviews",t,this.paginateCallback,"jsonp"),!1},e.submitForm=function(e){var t;return t=this.$(e).serializeObject(),t=this.$.extend(t,this.extraAjaxParams),t=this.$.param(t),t=t.replace(/%0D%0A/g,"%0A"),this.$.ajax({url:this.api_url+"/reviews/create",type:"GET",dataType:"jsonp",data:t,success:this.formCallback,beforeSend:function(e){return function(){return e.$(".spr-button-primary").attr("disabled","disabled")}}(this),complete:function(e){return function(){return e.$(".spr-button-primary").removeAttr("disabled")}}(this)}),!1},e.reportReview=function(e){var t;return confirm("Are you sure you want to report this review as inappropriate?")&&(t=this.$.extend({id:e},this.extraAjaxParams),this.$.get(this.api_url+"/reviews/report",t,this.reportCallback,"jsonp")),!1},e.toggleReviews=function(e){var t;return t=this.$("#shopify-product-reviews[data-id='"+e+"']"),t.find(".spr-reviews").toggle()},e.toggleForm=function(e){var t;return t=this.$("#shopify-product-reviews[data-id='"+e+"']"),t.find(".spr-form").toggle()},e.setRating=function(e){var t,r,a;return t=this.$(e).parents("form"),a=this.$(e).attr("data-value"),r=this.$(e).parent(),t.find("input[name='review[rating]']").val(a),this.setStarRating(a,r)},e.setStarRating=function(e,t){return t.find("a:lt("+e+")").removeClass("spr-icon-star-empty spr-icon-star-hover"),t.find("a:gt("+(e-1)+")").removeClass("spr-icon-star-hover").addClass("spr-icon-star-empty")},e.badgesCallback=function(t){var r;return r=t.badges,e.$.map(e.badgeEls,function(t){var a;if(a=e.$(t).attr("data-id"),r[a]!==undefined)return e.$(t).replaceWith(r[a]),e.triggerEvent("spr:badge:loaded",{id:a})})},e.productCallback=function(t){var r;return r=t.remote_id.toString(),e.renderProduct(r,t.product),e.renderForm(r,t.form),e.renderReviews(r,t.reviews)},e.renderProduct=function(e,t){return this.$.map(this.reviewEls,function(r){return function(a){if(e===r.$(a).attr("data-id"))return r.$(a).html(innerShiv(t,!1)),r.triggerEvent("spr:product:loaded",{id:e})}}(this))},e.renderForm=function(e,t){var r;return r=this.$(this.elSettings[e].form_el+e),r.html(t),this.triggerEvent("spr:form:loaded",{id:e})},e.renderReviews=function(t,r){var a;return a=e.$(e.elSettings[t].reviews_el+t),a.html(r),e.triggerEvent("spr:reviews:loaded",{id:t})},e.formCallback=function(t){var r,a,i,n;return n=t.status,i=t.remote_id,a=t.form,r=e.$(e.elSettings[i].form_el+i),r.html(a),"failure"===n&&e.initStarRating(r),"success"===n&&e.$("#shopify-product-reviews[data-id='"+i+"'] .spr-summary-actions-newreview").hide(),e.triggerEvent("spr:form:"+n,{id:i})},e.initStarRating=function(e){var t,r,a;if((a=e.find("input[name='review[rating]']"))&&a.val())return r=a.val(),t=e.find(".spr-starrating"),this.setStarRating(r,t)},e.paginateCallback=function(t){var r,a;return a=t.remote_id.toString(),r=t.reviews,e.renderReviews(a,r)},e.reportCallback=function(t){var r;return r="#report_"+t.id,e.$(r).replaceWith("<span class='spr-review-reportreview'>"+e.$(r).attr("data-msg")+"</span>")},e.loadjQuery=function(t){return e.loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js",function(){return e.$=jQuery.noConflict(!0),t()})},e.loadScript=function(e,t){var r;return r=document.createElement("script"),r.type="text/javascript",r.readyState?r.onreadystatechange=function(){if("loaded"===r.readyState||"complete"===r.readyState)return r.onreadystatechange=null,t()}:r.onload=function(){return t()},r.src=e,document.getElementsByTagName("head")[0].appendChild(r)},e.loadjQueryExtentions=function(e){return e.fn.serializeObject=function(){var t,r;return t={},r=this.serializeArray(),e.each(r,function(){return t[this.name]?(t[this.name].push||(t[this.name]=[t[this.name]]),t[this.name].push(this.value||"")):t[this.name]=this.value||""}),t}},e.triggerEvent=function(e,t){return this.$(document).trigger(e,t)},e}(),function(){SPR.loadStylesheet(),SPR.loadjQuery(function(){return SPR.$.ajaxSetup({cache:!1}),SPR.loadjQueryExtentions(SPR.$),SPR.$(document).ready(function(){return SPR.registerCallbacks(),SPR.initRatingHandler(),SPR.initDomEls(),SPR.loadProducts(),SPR.loadBadges()})})}()}).call(this)}("undefined"!=typeof global?global:"undefined"!=typeof window&&window);

//   	// Build Image swap
//   	//buildImageSwap(data);

//   	/* start-initialize-bc-al */
//     var self = this;
//     var alEnable = true;
//     if(self.getSettingValue('actionlist.qvEnable') != '' || self.getSettingValue('actionlist.atcEnable') != ''){
//       alEnable = self.getSettingValue('actionlist.qvEnable') || self.getSettingValue('actionlist.atcEnable');
//     }
//     if (alEnable === true  && typeof BCActionList !== 'undefined') {
//         if (typeof bcActionList === 'undefined') {
//             bcActionList = new BCActionList();
//         }else{
//           if (typeof bcAlParams !== 'undefined' && typeof bcSfFilterParams !== 'undefined') {
//                 bcActionList.initFlag = false;
//                 bcActionList.alInit(bcSfFilterParams, bcAlParams);
//             } else {
//                 bcActionList.alInit();
//             }
//         }
//     }
//     /* end-initialize-bc-al */
// };

// // Build Additional Elements
// BCSfFilter.prototype.buildAdditionalElements = function(data, eventType) {
//   	// Add class for buidling Image swap
//   	addProductItemClass();

//     var totalProduct = '';
//     if (data.total_product == 1) {
//         totalProduct = bcSfFilterConfig.label.items_with_count_one.replace(/{{ count }}/g, data.total_product);
//     } else {
// //         totalProduct = bcSfFilterConfig.label.items_with_count_other.replace(/{{ count }}/g, data.total_product);
//     }
//     jQ('#bc-sf-filter-total-product').html(totalProduct);

//   	// Integrate Smart wishlist
//     if (eventType != 'init') {
//         //ReloadSmartWishlist();
//     }

//   	// Integrate Doubly
// 	if (typeof DoublyGlobalCurrency !== 'undefined') {
// 		if (jQueryGrizzly('.currency-switcher-btn.selected').length > 0) {
// 			DoublyGlobalCurrency.convertAll(jQueryGrizzly('.currency-switcher-btn.selected').attr('doubly-currency'));
// 		} else if (jQueryGrizzly('[name=doubly-currencies]').length > 0) {
// 			DoublyGlobalCurrency.convertAll(jQueryGrizzly('[name=doubly-currencies]').val());
// 		}
// 	}
// }

// // Add class for buidling Image swap
// function addProductItemClass(){
//     var productItem = bcsffilter.selector.products + ' > div';
//     jQ(productItem).each(function() {
// 		jQ(this).addClass('bc-sf-filter-product-item');
//   	});
// }

// /* Start Swap Image */
// function buildImageSwap(data) {
//     var i = 0,
//         productItem = bcsffilter.selector.products + ' > div';
//     jQ(productItem).each(function() {
//         var images = data[i].images_info;
//         if (images.length > 1) {
//             var imgFirst = jQ(this).find('img:first');
//             imgFirst.parent().css('padding-top', 0);
//             imgFirst.addClass('bc-sf-filter-main-image').css('position', 'relative').wrap('<div class="bc-sf-filter-product-item-image"></div>');
//             var imgHoverHtml = '<img class="bc-sf-filter-hover-image" src="' + bcsffilter.optimizeImage(images[1].src, bcSfFilterConfig.custom.wrapper_img_size) + '" alt="">';
//             imgFirst.after(imgHoverHtml);
//         }
//         i++;
//     });
// }
// /* End Swap Image */

// BCSfFilter.prototype.buildFilterOptionRatingData = function(fOType, fOId, fOLabel, fODisplayType, fOSelectType, fOItemValue, fOData, fTreeType) {
//     //if (this.checkShowFilterOptionItem(fOItemValue, fOData)) {
//         var iValue = parseInt(fOItemValue.key.replace('-*', ''));
//         // Customize label
//         var stars = this.buildRatingStars(fOItemValue.from);
//         var iLabel = this.getTemplate('filterOptionRatingStar').replace(/{{itemStars}}/g, stars).replace(/{{label.ratingUp}}/g, this.getSettingValue('label.ratingUp'));
//         // Get item HTML Template & Build Data
//         var html = this.getTemplate('filterOptionRatingItem');
//         html = this.buildFilterOptionItem(html, iLabel, iValue, fOType, fOId, fOLabel, fODisplayType, fOSelectType, fOItemValue, fOData, fTreeType);
//         return html;
//     //}
// };
