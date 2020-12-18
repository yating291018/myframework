const goodType = [
  {
    id: '547f76222d4d4f92a49de2e0bf6bd7ef',
    type: 1,
    name: '颜色',
    propertyList: [
      {
        id: '8ed34030c93c4dc29e43edb95e6cfca2',
        property: 1,
        name: '橙色'
      },
      {
        id: 'c80cbe4c6cbf49f5b2822331768cd422',
        property: 2,
        name: '绿色'
      }
    ]
  },
  {
    id: '21967fba6b574b479974e50720ad25fe',
    type: 2,
    name: '测试类别',
    propertyList: [
      {
        id: 'f40c3884e5e9422c973d31631a65ae64',
        property: 1,
        name: '小'
      },
      {
        id: 'edac997ed2c54e41b1f3076fbd6e19f9',
        property: 2,
        name: '中'
      },
      {
        id: '408fb530344a4a41b33932431638dcbb',
        property: 3,
        name: '大'
      }
    ]
  },
  {
    id: 'fe7f49a798794670be622e6b9d2f386a',
    type: 3,
    name: 'tester',
    propertyList: [
      {
        id: 'c76dc797eaae4d8eb360de8811a9ec7a',
        property: 1,
        name: 'one'
      },
      {
        id: '02808ac287e8410f936a90167d82ee2b',
        property: 2,
        name: 'two'
      },
      {
        id: 'd5660085ff8743d999f6ed3a497ec8b7',
        property: 3,
        name: 'three'
      }
    ]
  }
]

const orgdata = {
  skus: [
    {
      id: 'f5eee18b8d5b4fc2b46a56e92abdb525',
      stockAmmount: 7,
      isPaymentAccpoints: 1,
      isPaymentCurrency: 0,
      isPaymentMixed: 0,
      priceAccpoints: 1,
      priceCurrency: 0,
      mixedPriceAccpoints: 0,
      mixedPriceCurrency: 0,
      rebate: 100,
      skusTypes: [
        {
          id: '74fe546803e44a7c95bebfe56a29952d',
          typeId: '21967fba6b574b479974e50720ad25fe',
          typeName: '测试类别',
          type: 2,
          propertyId: 'f40c3884e5e9422c973d31631a65ae64',
          propertyName: '小',
          property: 1
        },
        {
          id: '78f98ee53ae549ceb2c18629152ff849',
          typeId: 'fe7f49a798794670be622e6b9d2f386a',
          typeName: 'tester',
          type: 3,
          propertyId: '02808ac287e8410f936a90167d82ee2b',
          propertyName: 'two',
          property: 2
        },
        {
          id: '91cefe600f40498bb5013deebb9c27be',
          typeId: '547f76222d4d4f92a49de2e0bf6bd7ef',
          typeName: '颜色',
          type: 1,
          propertyId: 'c80cbe4c6cbf49f5b2822331768cd422',
          propertyName: '绿色',
          property: 2
        }
      ]
    },
    {
      id: '383feb7947f14ce5b832bc8700e65c9e',
      stockAmmount: 2,
      isPaymentAccpoints: 1,
      isPaymentCurrency: 0,
      isPaymentMixed: 0,
      priceAccpoints: 1,
      priceCurrency: 0,
      mixedPriceAccpoints: 0,
      mixedPriceCurrency: 0,
      rebate: 100,
      skusTypes: [
        {
          id: '1beed60c2eb244f89ad82806d343d468',
          typeId: 'fe7f49a798794670be622e6b9d2f386a',
          typeName: 'tester',
          type: 3,
          propertyId: '02808ac287e8410f936a90167d82ee2b',
          propertyName: 'two',
          property: 2
        },
        {
          id: '357fd7db1f5244e5b64f48a34bb581fa',
          typeId: '21967fba6b574b479974e50720ad25fe',
          typeName: '测试类别',
          type: 2,
          propertyId: 'edac997ed2c54e41b1f3076fbd6e19f9',
          propertyName: '中',
          property: 2
        },
        {
          id: '5c29a251e55a4b678fc4f8287cc560b5',
          typeId: '547f76222d4d4f92a49de2e0bf6bd7ef',
          typeName: '颜色',
          type: 1,
          propertyId: 'c80cbe4c6cbf49f5b2822331768cd422',
          propertyName: '绿色',
          property: 2
        }
      ]
    },
    {
      id: '905b10e1740e4be992d14cfc23a887a2',
      stockAmmount: 4,
      isPaymentAccpoints: 1,
      isPaymentCurrency: 0,
      isPaymentMixed: 0,
      priceAccpoints: 1,
      priceCurrency: 0,
      mixedPriceAccpoints: 0,
      mixedPriceCurrency: 0,
      rebate: 100,
      skusTypes: [
        {
          id: '0a5f93d9ef1c486ba369dcb1fbd3aed9',
          typeId: 'fe7f49a798794670be622e6b9d2f386a',
          typeName: 'tester',
          type: 3,
          propertyId: 'c76dc797eaae4d8eb360de8811a9ec7a',
          propertyName: 'one',
          property: 1
        },
        {
          id: 'd920730c34644218b3d0bbc5fca5edf4',
          typeId: '21967fba6b574b479974e50720ad25fe',
          typeName: '测试类别',
          type: 2,
          propertyId: 'f40c3884e5e9422c973d31631a65ae64',
          propertyName: '小',
          property: 1
        },
        {
          id: '2afbe8a77d034de0a1655f9ad1a25b95',
          typeId: '547f76222d4d4f92a49de2e0bf6bd7ef',
          typeName: '颜色',
          type: 1,
          propertyId: 'c80cbe4c6cbf49f5b2822331768cd422',
          propertyName: '绿色',
          property: 2
        }
      ]
    },
    {
      id: 'a440b0084e564d3e9d7c8b445bb7645e',
      stockAmmount: 10,
      isPaymentAccpoints: 1,
      isPaymentCurrency: 0,
      isPaymentMixed: 0,
      priceAccpoints: 1,
      priceCurrency: 0,
      mixedPriceAccpoints: 0,
      mixedPriceCurrency: 0,
      rebate: 100,
      skusTypes: [
        {
          id: '12a4715b6730438888e88f302871245a',
          typeId: '21967fba6b574b479974e50720ad25fe',
          typeName: '测试类别',
          type: 2,
          propertyId: 'f40c3884e5e9422c973d31631a65ae64',
          propertyName: '小',
          property: 1
        },
        {
          id: '9063e1f1586f4a74b2f614039e8743c4',
          typeId: '547f76222d4d4f92a49de2e0bf6bd7ef',
          typeName: '颜色',
          type: 1,
          propertyId: 'c80cbe4c6cbf49f5b2822331768cd422',
          propertyName: '绿色',
          property: 2
        },
        {
          id: 'ae38b9cf56d5408a809d6fbd1b902ee5',
          typeId: 'fe7f49a798794670be622e6b9d2f386a',
          typeName: 'tester',
          type: 3,
          propertyId: 'd5660085ff8743d999f6ed3a497ec8b7',
          propertyName: 'three',
          property: 3
        }
      ]
    },
    {
      id: '9961364cc3494823aaf7699733393335',
      stockAmmount: 15,
      isPaymentAccpoints: 1,
      isPaymentCurrency: 0,
      isPaymentMixed: 0,
      priceAccpoints: 1,
      priceCurrency: 0,
      mixedPriceAccpoints: 0,
      mixedPriceCurrency: 0,
      rebate: 100,
      skusTypes: [
        {
          id: '3335920f79914cfb8a39ae22b0802bc0',
          typeId: 'fe7f49a798794670be622e6b9d2f386a',
          typeName: 'tester',
          type: 3,
          propertyId: 'c76dc797eaae4d8eb360de8811a9ec7a',
          propertyName: 'one',
          property: 1
        },
        {
          id: '34950de7059d4fffac485abb59a79381',
          typeId: '21967fba6b574b479974e50720ad25fe',
          typeName: '测试类别',
          type: 2,
          propertyId: 'edac997ed2c54e41b1f3076fbd6e19f9',
          propertyName: '中',
          property: 2
        },
        {
          id: 'a82ff8d74d3d4a1ea454e4870cc68b64',
          typeId: '547f76222d4d4f92a49de2e0bf6bd7ef',
          typeName: '颜色',
          type: 1,
          propertyId: 'c80cbe4c6cbf49f5b2822331768cd422',
          propertyName: '绿色',
          property: 2
        }
      ]
    },
    {
      id: 'bd3aeb3c7c854a80b88e7f82a5a78a1e',
      stockAmmount: 8,
      isPaymentAccpoints: 1,
      isPaymentCurrency: 0,
      isPaymentMixed: 0,
      priceAccpoints: 1,
      priceCurrency: 0,
      mixedPriceAccpoints: 0,
      mixedPriceCurrency: 0,
      rebate: 100,
      skusTypes: [
        {
          id: '4fc8e61aa192463085578de92974b18b',
          typeId: '21967fba6b574b479974e50720ad25fe',
          typeName: '测试类别',
          type: 2,
          propertyId: 'edac997ed2c54e41b1f3076fbd6e19f9',
          propertyName: '中',
          property: 2
        },
        {
          id: '884f32b64a4b478bb01f93b40dfeb6fc',
          typeId: '547f76222d4d4f92a49de2e0bf6bd7ef',
          typeName: '颜色',
          type: 1,
          propertyId: 'c80cbe4c6cbf49f5b2822331768cd422',
          propertyName: '绿色',
          property: 2
        },
        {
          id: 'f66109eccd934529a18026376fccfa7b',
          typeId: 'fe7f49a798794670be622e6b9d2f386a',
          typeName: 'tester',
          type: 3,
          propertyId: 'd5660085ff8743d999f6ed3a497ec8b7',
          propertyName: 'three',
          property: 3
        }
      ]
    },
    {
      id: '5e094973bbaf41ce81b7b626174b0bbf',
      stockAmmount: 8,
      isPaymentAccpoints: 1,
      isPaymentCurrency: 0,
      isPaymentMixed: 0,
      priceAccpoints: 1,
      priceCurrency: 0,
      mixedPriceAccpoints: 0,
      mixedPriceCurrency: 0,
      rebate: 100,
      skusTypes: [
        {
          id: '23d688678aaa42eebd3c04cceaa61bac',
          typeId: '547f76222d4d4f92a49de2e0bf6bd7ef',
          typeName: '颜色',
          type: 1,
          propertyId: '8ed34030c93c4dc29e43edb95e6cfca2',
          propertyName: '橙色',
          property: 1
        },
        {
          id: '55649f0753464921b68b0017ce0010d7',
          typeId: '21967fba6b574b479974e50720ad25fe',
          typeName: '测试类别',
          type: 2,
          propertyId: '408fb530344a4a41b33932431638dcbb',
          propertyName: '大',
          property: 3
        },
        {
          id: 'd7248b12b7e847ca9be024ed3bb6d101',
          typeId: 'fe7f49a798794670be622e6b9d2f386a',
          typeName: 'tester',
          type: 3,
          propertyId: 'd5660085ff8743d999f6ed3a497ec8b7',
          propertyName: 'three',
          property: 3
        }
      ]
    },
    {
      id: '60ce0a1f99e940dc82d041d36681111b',
      stockAmmount: 9,
      isPaymentAccpoints: 1,
      isPaymentCurrency: 0,
      isPaymentMixed: 0,
      priceAccpoints: 1,
      priceCurrency: 0,
      mixedPriceAccpoints: 0,
      mixedPriceCurrency: 0,
      rebate: 100,
      skusTypes: [
        {
          id: '91faddf91e944cabadbda5c342430139',
          typeId: '547f76222d4d4f92a49de2e0bf6bd7ef',
          typeName: '颜色',
          type: 1,
          propertyId: 'c80cbe4c6cbf49f5b2822331768cd422',
          propertyName: '绿色',
          property: 2
        },
        {
          id: '207698d97e4247bb9747843d16e25750',
          typeId: '21967fba6b574b479974e50720ad25fe',
          typeName: '测试类别',
          type: 2,
          propertyId: '408fb530344a4a41b33932431638dcbb',
          propertyName: '大',
          property: 3
        },
        {
          id: '3c69d3c73aa24cccbacaf805d71117fd',
          typeId: 'fe7f49a798794670be622e6b9d2f386a',
          typeName: 'tester',
          type: 3,
          propertyId: 'd5660085ff8743d999f6ed3a497ec8b7',
          propertyName: 'three',
          property: 3
        }
      ]
    },
    {
      id: 'f3c805d1959d413a86679955ae047ec5',
      stockAmmount: 10,
      isPaymentAccpoints: 1,
      isPaymentCurrency: 0,
      isPaymentMixed: 0,
      priceAccpoints: 1,
      priceCurrency: 0,
      mixedPriceAccpoints: 0,
      mixedPriceCurrency: 0,
      rebate: 100,
      skusTypes: [
        {
          id: '00113d4b6046411cb8ff935b2743904b',
          typeId: 'fe7f49a798794670be622e6b9d2f386a',
          typeName: 'tester',
          type: 3,
          propertyId: '02808ac287e8410f936a90167d82ee2b',
          propertyName: 'two',
          property: 2
        },
        {
          id: 'c13d8a4c7a18477fbe7027044d0393a0',
          typeId: '547f76222d4d4f92a49de2e0bf6bd7ef',
          typeName: '颜色',
          type: 1,
          propertyId: 'c80cbe4c6cbf49f5b2822331768cd422',
          propertyName: '绿色',
          property: 2
        },
        {
          id: '653d0e243bab45eaa5c83dc8206ee33e',
          typeId: '21967fba6b574b479974e50720ad25fe',
          typeName: '测试类别',
          type: 2,
          propertyId: '408fb530344a4a41b33932431638dcbb',
          propertyName: '大',
          property: 3
        }
      ]
    }
  ]
}
export {
  goodType,
  orgdata
}
