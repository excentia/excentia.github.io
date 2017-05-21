function getInputValue(id) {
  return document.getElementById(id).value;
}

function isValidField(field) {
  var valid = true;

  if (field == null || field.length == 0 || /^\s+$/.test(field)) {
    valid = false;
  }

  return valid;
}

function validateEmail(email) {
  var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
}

function showError(id, valid) {
  if (valid == true) {
    $(id).removeClass('error');
  } else {
    $(id).addClass('error');
  }
}

function urlParam(name) {
  var paramValue = null;
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);

  if (results != null && results.length > 0) {
    paramValue = decodeURIComponent(results[1]);
  }

  return paramValue;
}

function showEvaluationForm() {
  $('#buy-form').hide();
  $('#inline-download').show();
}

function showBuyForm() {
  $('#inline-download').hide();
  $('#buy-form').show();
}

function showParamsWrong() {
  $('#main-content').load("../404.html", function() {
    $('.container').wrap('<body></body>');
  });
}

function getLogoImg(productKey) {
  return productKey.replace('sonar-', '').replace('-plugin', '');
}

function sendEvaluationRequest() {
  // Get URL params
  var productKey = urlParam('productKey');
  var productVersion = urlParam('productVersion');

  // Get info from form
  var nameval = getInputValue('name');
  var surnameval = getInputValue('surname');
  var emailval = getInputValue('email');
  var companyval = getInputValue('company');

  // Check values
  var namevalid = isValidField(nameval);
  var surnamevalid = isValidField(surnameval);
  var mailvalid = validateEmail(emailval);
  var companyvalid = isValidField(companyval);

  showError('#name', namevalid);
  showError('#surname', surnamevalid);
  showError('#email', mailvalid);
  showError('#company', companyvalid);

  if (namevalid && surnamevalid && mailvalid && companyvalid) {
    var url = 'https://www.qalitax.com/licenser/register/product/' + productKey;
    var data = 'productVersion=' + productVersion;
    data += '&customerName=' + nameval;
    data += '&customerSurnames=' + surnameval;
    data += '&customerEmail=' + emailval;
    data += '&customerCompany=' + companyval;

    // Execute POST
    $.ajax({
      url : url,
      data : data,
      type : 'POST',
      crossDomain : true,
      beforeSend : function() {
        $('#fields-form').hide();
        $('#send').hide();
        $('#loading').show();
      },
      complete : function() {
        $('#loading').hide();
        $('#fields-form').show();
      },
      success : function(response) {
        // REGISTER DONE
        $('#inline-download').hide();
        $('#buy-form').hide();
        $('#trial-form').hide();
        $('#success-request').show();
     	parent.$.fancybox.close();
      },
      error : function(response) {
        // REGISTER FAIL
        $('#inline-download').hide();
        $('#buy-form').hide();
        $('#trial-form').hide();
        $('#error-response').show();
     	parent.$.fancybox.close();
      }
    });
  }
}

$(document).ready(function() {
  $('#form').submit(function() {
    return false;
  });

  // Get URL params
  var productKey = urlParam('productKey');
  var productVersion = urlParam('productVersion');

  // Params OK
  if (productKey && productVersion) {
    // PAYPAL
    var paypalId = getPaypalId(productKey);

    if (paypalId) {
      // Set PAYPAL ID
      $('#paypal-button').attr('value', paypalId);

      // Set NAME
      var productName = getProductName(productKey);
      $('#plugin-name').text(productName);
      $('#plugin-name-evaluation').text(productName);

      // Set PRICE
      var productPrice = getProductPrice(productKey);
      $('#plugin-price').text(productPrice);
    }
    // PLUGIN DOESNT EXIST
    else {
      showParamsWrong();
    }
  }
  // Params WRONG
  else {
    showParamsWrong();
  }
});