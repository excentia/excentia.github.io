var productsInfo = {
  'sonar-benchmark-plugin' : {
    'name' : 'SonarQube Benchmark',
    'paypalId' : 'RDDYARFW8CMKA',
    'price' : '239.95 €/year'
  },
  'sonar-checkstyle-model-plugin' : {
    'name' : 'SonarQube Checkstyle Model',
    'paypalId' : 'XR86Y7EJN4SJW',
    'price' : '79.95 €/year'
  },
  'sonar-city-model-plugin' : {
    'name' : 'SonarQube 3D Code Metrics',
    'paypalId' : 'Z7QCC2Y4MG862',
    'price' : '359 €/year'
  },
  'sonar-css-plugin' : {
    'name' : 'SonarQube CSS Validator',
    'paypalId' : 'X9FXK7Q9P8XQ4',
    'price' : '495 €/year'
  },
  'sonar-dbmetrics-plugin' : {
    'name' : 'SonarQube DBMetrics',
    'paypalId' : 'D653VQVJGWXYJ',
    'price' : '359 €/year'
  },
  'sonar-devteam-plugin' : {
    'name' : 'SonarQube DevTeam',
    'paypalId' : 'X65ZSC852ZCFE',
    'price' : '495 €/year'
  },
  'sonar-findbugs-model-plugin' : {
    'name' : 'SonarQube Findbugs Model',
    'paypalId' : 'KKRUTCT7FY6KW',
    'price' : '79.95 €/year'
  },
  'sonar-fxcop-model-plugin' : {
    'name' : 'SonarQube Fxcop Model',
    'paypalId' : 'KJWVRA9D2BFXW',
    'price' : '79.95 €/year'
  },
  'sonar-gendarme-model-plugin' : {
    'name' : 'SonarQube Gendarme Model',
    'paypalId' : 'ZL9WNDZQ8BDT8',
    'price' : '79.95 €/year'
  },
  'sonar-odt-report-plugin' : {
    'name' : 'SonarQube ODT Report',
    'paypalId' : 'A6MXGGQ7PDBBE',
    'price' : '359 €/year'
  },
  'sonar-owasp-plugin' : {
    'name' : 'SonarQube OWASP',
    'paypalId' : 'AEYERULA2LNEL',
    'price' : '239.95 €/year'
  },
  'sonar-pmd-model-plugin' : {
    'name' : 'SonarQube PMD Model',
    'paypalId' : 'FF3WN55YXFDJW',
    'price' : '79.95 €/year'
  },
  'sonar-qalitax-certification-plugin' : {
    'name' : 'SonarQube QAlitax Certification',
    'paypalId' : '4GBRVX2QNLYYY',
    'price' : '239.95 €/year'
  },
  'sonar-stylecop-model-plugin' : {
    'name' : 'SonarQube Stylecop Model',
    'paypalId' : '5G6MVR6VHYMGY',
    'price' : '79.95 €/year'
  }
};

function getProductName(productKey) {
  var name = null;

  if (productsInfo[productKey]) {
    name = productsInfo[productKey]['name'];
  }

  return name;
}

function getPaypalId(productKey) {
  var paypalId = null;

  if (productsInfo[productKey]) {
    paypalId = productsInfo[productKey]['paypalId'];
  }

  return paypalId;
}

function getProductPrice(productKey) {
  var price = null;

  if (productsInfo[productKey]) {
    price = productsInfo[productKey]['price'];
  }

  return price;
}