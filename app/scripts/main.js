(function() {
	'use strict';

	var order_panel = chrome.extension.getURL("order_panel.html");

	$.get(order_panel, function(data) {
		// Inject the order panel
		$('body').prepend(data);

		// Get the manifest information
		var manifest = chrome.runtime.getManifest();

		// Get the version wrapper
		var versionWrapper = document.getElementById('version');

		// Set the current extension version from manifest
		versionWrapper.innerHTML = manifest.version;

		document.getElementById('openOrder').onclick = function() {
			openOrder();
		}

		document.getElementById('hidePanel').onclick = function() {
			document.getElementById('orderPanel').style.display = 'none';

			hidePanel();
		}

		document.getElementById('orderButton').onclick = function() {
			this.style.display = 'none';

			showPanel();
		}
	});

	function hidePanel () {
		var panelWrapper = document.getElementById('orderButton');

		panelWrapper.style.display = 'block';
	}

	function showPanel () {
		var panelWrapper = document.getElementById('orderPanel');

		panelWrapper.style.display = 'block'
	}

	function openOrder () {
		var store = url('hostname');

		var itemId = '';
		var orderUrl = '';

		if (store === 'item.taobao.com') {
			itemId = url('?id');

			orderUrl = website.url + 'shop/products/taobao/' + itemId;
		} else if (store === 'world.taobao.com') {
			itemId = url('filename');

			orderUrl = website.url + 'shop/products/taobao/' + itemId;
		} else if (store === 'detail.tmall.com') {
			itemId = url('?id');

			orderUrl = website.url + 'shop/products/tmall/' + itemId;
		} else if (store === 'world.tmall.com') {
			itemId = url('filename');

			orderUrl = website.url + 'shop/products/tmall/' + itemId;
		} else if (store === 'detail.1688.com') {
			itemId = url('filename');

			orderUrl = website.url + 'shop/products/alibaba/' + itemId;
		} else {
			alert('Có lỗi xảy ra hoặc website chưa được hỗ trợ!');
		}

		// console.log(orderUrl);
		window.location.href = orderUrl;
	}
})();
