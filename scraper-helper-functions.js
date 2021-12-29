Array.prototype.unique = function() {
    var a = this.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }
    return a;
};

window.sss = window.sss || {};

window.sss.updateQueryString = function(key, value, url) {
  if (!url) url = window.location.href;
  var re = new RegExp("([?&])" + key + "=.*?(&|#|$)(.*)", "gi"),
      hash;

  if (re.test(url)) {
      if (typeof value !== 'undefined' && value !== null) {
          return url.replace(re, '$1' + key + "=" + value + '$2$3');
      }
      else {
          hash = url.split('#');
          url = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, '');
          if (typeof hash[1] !== 'undefined' && hash[1] !== null) {
              url += '#' + hash[1];
          }
          return url;
      }
  }
  else {
      if (typeof value !== 'undefined' && value !== null) {
          var separator = url.indexOf('?') !== -1 ? '&' : '?';
          hash = url.split('#');
          url = hash[0] + separator + key + '=' + value;
          if (typeof hash[1] !== 'undefined' && hash[1] !== null) {
              url += '#' + hash[1];
          }
          return url;
      }
      else {
          return url;
      }
  }
}

window.sss.findStringBetween = function(start, stop, string) {
  let value = string.split(start).pop().split(stop)[0];
  return value.trim();
}

window.sss.toTitleCase = function(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

window.sss.getNumberFromString = function(string) {
  if (!string) {
    return '';
  }
  return string.replace(/[^0-9.]/g, '');
}

window.sss.youTubeURLParser = function(url) {
  if (!url) {
    return null;
  }
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return (match&&match[7].length==11)? match[7] : null;
}

window.sss.addContainersAfterSelector = function(selector) {
    jQuery(selector).after('<p style="color:red">documents: </p> <div id="sss-document-wrapper"></div>');
    jQuery(selector).after('<p style="color:red">feature_id: </p> <div id="sss-feature-wrapper"></div>');
    jQuery(selector).after('<p style="color:red">frame_material_id: </p> <div id="sss-frame-materials-wrapper"></div>');
    jQuery(selector).after('<p style="color:red">exterior_material_id: </p> <div id="sss-exterior-materials-wrapper"></div>');
    jQuery(selector).after('<p style="color:red">shape_id: </p> <div id="sss-shapes-wrapper"></div>');
    jQuery(selector).after('<p style="color:red">category_type_id: </p> <div id="sss-category-types-wrapper"></div>');
    jQuery(selector).after('<p style="color:red">fuel_type_id: </p> <div id="sss-fuel-types-wrapper"></div>');
    jQuery(selector).after('<p style="color:red">lift_system_id: </p> <div id="sss-lift-systems-wrapper"></div>');
    jQuery(selector).after('<p style="color:red">width_in_inches: </p> <div id="sss-width-wrapper"></div>');
    jQuery(selector).after('<p style="color:red">length_in_inches: </p> <div id="sss-length-wrapper"></div>');
    jQuery(selector).after('<p style="color:red">height_in_inches: </p> <div id="sss-height-wrapper"></div>');
    jQuery(selector).after('<p style="color:red">weight_in_pounds: </p> <div id="sss-weight-wrapper"></div>');
    jQuery(selector).after('<p style="color:red">pole_diameter_inches: </p> <div id="sss-pole-diameter-wrapper"></div>');
    jQuery(selector).after('<p style="color:red">diameter_inches: </p> <div id="sss-diameter-wrapper"></div>');
    jQuery(selector).after('<p style="color:red">photo: </p> <div id="sss-photos-wrapper"></div>');
    jQuery(selector).after('<p style="color:red">description: </p> <div id="sss-description-wrapper"></div>');
    jQuery(selector).after('<p style="color:red">max_occupancy_adults: </p> <div id="sss-max-occupancy-wrapper"></div>');
    jQuery(selector).after('<p style="color:red">youTubeCode: </p> <div id="sss-youtube-wrapper"></div>');
    jQuery(selector).after('<p style="color:red">category_id: </p> <div id="sss-category-type-wrapper"></div>');
    jQuery(selector).after('<p style="color:red">brand_id: </p> <div id="sss-brand-wrapper"></div>');
    jQuery(selector).after('<p style="color:red">unit_model: </p> <div id="sss-unit-model-name-wrapper"></div>');
    jQuery(selector).after('<p style="color:red">sub_model_name: </p> <div id="sss-sub-model-name-wrapper"></div>');
    jQuery(selector).after('<p style="color:red">sub_model_full_name: </p> <div id="sss-sub-model-full-name-wrapper"></div>');
    jQuery(selector).after('<p style="color:red">product_link_href: </p> <div id="sss-product-link-wrapper"></div>');
    jQuery(selector).after('<p style="color:red">html_description: </p> <div id="sss-html-description-wrapper"></div>');
    jQuery(selector).after('<p style="color:red">ignore_unit: </p> <div id="sss-ignore-unit"></div>');
    jQuery(selector).after('<p style="color:red">model_number: </p> <div id="sss-model-number-wrapper"></div>');
    jQuery(selector).after('<p style="color:red">seat_height_inches: </p> <div id="sss-seat-height-wrapper"></div>');
    jQuery(selector).after('<p style="color:red">arm_height_inches: </p> <div id="sss-arm-height-wrapper"></div>');
    jQuery(selector).after('<p style="color:red">seating_surface_id: </p> <div id="sss-seating-surface-wrapper"></div>');
    jQuery(selector).after('<p style="color:red">btu: </p> <div id="sss-btu-wrapper"></div>');
    jQuery(selector).after('<p style="color:red">ignition_type_id: </p> <div id="sss-ignition-types-wrapper"></div>');
}

window.sss.markIgnoreUnit = function() {
  jQuery('#sss-ignore-unit').append('<p>ignore</p>');
}

window.sss.fetchFullModelSubNameByString = function(match) {
  if (jQuery('#sss-unit-model-name-wrapper').length) {
    match = match.replace(jQuery('#sss-unit-model-name-wrapper').text(), "").trim();
    jQuery('#sss-sub-model-name-wrapper').append('<p>' + match + '</p>');
  } else {
    jQuery('#sss-sub-model-name-wrapper').append('<p>' + match + '</p>');
  }
}

window.sss.setCategoryID = function(match) {
  jQuery('#sss-category-type-wrapper').append('<p>' + match + '</p>');
}

window.sss.setBrandID = function(match) {
  jQuery('#sss-brand-wrapper').append('<p>' + match + '</p>');
}

window.sss.setModelName = function(match) {
  jQuery('#sss-unit-model-name-wrapper').append('<p>' + match + '</p>');
}

window.sss.fetchModelSubNameByString = function(match) {
  jQuery('#sss-sub-model-full-name-wrapper').append('<p>' + match + '</p>');
}

window.sss.setProductLinkHREF = function(match) {
  jQuery('#sss-product-link-wrapper').append('<p>' + match + '</p>');
}

window.sss.fetchDataBySelectorAndAttribute = function(selector, attribute, nameSelector) {
    let data = [];
    jQuery(selector).each(function(){
        let url = jQuery(this).attr(attribute);
        if (nameSelector) {
          let name = jQuery(this).find(nameSelector).text();
          if (name) {
            url = window.sss.updateQueryString('sss_pdf_name',encodeURIComponent(name),url);
          }
          data.push(url);
        } else {
          data.push(url);
        }
    });
    return data;
}

window.sss.searchTextForValuesAndReturnKeys = function(keyValuePairs, text) {
    let matchingKeys = [];
    keyValuePairs.forEach(function(item) {
        if (item.avoid) {
          item.values.forEach(function(value) {
            let avoidItem = false;
            item.avoid.forEach(function(avoidValue) {
              if (text.toLowerCase().includes(avoidValue.toLowerCase())) {
                  avoidItem = true;
              }
            });
            if (!avoidItem) {
              if (text.toLowerCase().includes(value.toLowerCase())) {
                  matchingKeys.push(item.key);
              }
            }
          });
        } else {
          item.values.forEach(function(value) {
              if (text.toLowerCase().includes(value.toLowerCase())) {
                  matchingKeys.push(item.key);
              }
          });
        }
    });
    return matchingKeys;
}

window.sss.string_to_slug = function(str) {
      str = str.replace(/^\s+|\s+$/g, ''); // trim
      str = str.toLowerCase();

      // remove accents, swap Ã± for n, etc
      var from = "Ã Ã¡Ã¤Ã¢Ã¨Ã©Ã«ÃªÃ¬Ã­Ã¯Ã®Ã²Ã³Ã¶Ã´Ã¹ÃºÃ¼Ã»Ã±Ã§Â·/_,:;";
      var to = "aaaaeeeeiiiioooouuuunc------";
      for (var i=0, l=from.length; i<l; i++) {
          str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
      }

      str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
          .replace(/\s+/g, '-') // collapse whitespace and replace by -
          .replace(/-+/g, '-'); // collapse dashes

      return str;
}

window.sss.addNewPhotos = function(matches) {
      matches.forEach(function(match){
        let imageAlreadyExists = jQuery('#sss-photos-wrapper p:contains(' + match + ')').length;
        if (!imageAlreadyExists && match) {
          jQuery('#sss-photos-wrapper').append('<p>' + match + '</p>');
        }
      });
}

window.sss.addYouTubeCode = function(match) {
  jQuery('#sss-youtube-wrapper').append('<p>' + match + '</p>');
}

window.sss.addYouTubeCodeByURL = function(match) {
  let code = window.sss.youTubeURLParser(match);
  window.sss.addYouTubeCode(code);
}

window.sss.addNewDocument = function(matches) {
  if (Array.isArray(matches)) {
    matches.forEach(function(match){
        jQuery('#sss-document-wrapper').append('<p>' + match + '</p>');
    });
  } else {
    jQuery('#sss-document-wrapper').append('<p>' + matches + '</p>');
  }
}

window.sss.addPoleDiameter = function(match) {
  jQuery('#sss-pole-diameter-wrapper').append('<p>' + match + '</p>');
}

window.sss.addDiameter = function(match) {
  jQuery('#sss-diameter-wrapper').append('<p>' + match + '</p>');
}

window.sss.addNewFeatures = function(matches) {
      matches.forEach(function(match){
          jQuery('#sss-feature-wrapper').append('<p>' + match + '</p>');
      });
      if (!matches.length) {
        jQuery('#sss-feature-wrapper').append('<p>null</p>');
      }
}

window.sss.addNewCategoryTypes = function(matches) {
      matches.forEach(function(match){
          jQuery('#sss-category-types-wrapper').append('<p>' + match + '</p>');
      });
      if (!matches.length) {
        jQuery('#sss-category-types-wrapper').append('<p>null</p>');
      }
}

window.sss.addNewFrameMaterials = function(matches) {
      matches.forEach(function(match) {
          jQuery('#sss-frame-materials-wrapper').append('<p>' + match + '</p>');
      });
      if (!matches.length) {
        jQuery('#sss-frame-materials-wrapper').append('<p>null</p>');
      }
}

window.sss.addNewShapes = function(matches) {
      matches.forEach(function(match) {
          jQuery('#sss-shapes-wrapper').append('<p>' + match + '</p>');
      });
      if (!matches.length) {
        jQuery('#sss-shapes-wrapper').append('<p>null</p>');
      }
}

window.sss.addNewFuelTypes = function(matches) {
      matches.forEach(function(match) {
          jQuery('#sss-fuel-types-wrapper').append('<p>' + match + '</p>');
      });
      if (!matches.length) {
        jQuery('#sss-fuel-types-wrapper').append('<p>null</p>');
      }
}

window.sss.addNewIgnitionTypes = function(matches) {
      matches.forEach(function(match) {
          jQuery('#sss-ignition-types-wrapper').append('<p>' + match + '</p>');
      });
      if (!matches.length) {
        jQuery('#sss-ignition-types-wrapper').append('<p>null</p>');
      }
}

window.sss.addNewExteriorMaterials = function(matches) {
      matches.forEach(function(match) {
          jQuery('#sss-exterior-materials-wrapper').append('<p>' + match + '</p>');
      });
      if (!matches.length) {
        jQuery('#sss-exterior-materials-wrapper').append('<p>null</p>');
      }
}

window.sss.addNewSeatingSurfaces = function(matches) {
      matches.forEach(function(match) {
          jQuery('#sss-seating-surface-wrapper').append('<p>' + match + '</p>');
      });
      if (!matches.length) {
        jQuery('#sss-seating-surface-wrapper').append('<p>1</p>'); // 6 is standard
      }
}

window.sss.addNewLiftSystems = function(matches) {
      matches.forEach(function(match) {
          jQuery('#sss-lift-systems-wrapper').append('<p>' + match + '</p>');
      });
      if (!matches.length) {
        jQuery('#sss-lift-systems-wrapper').append('<p>null</p>');
      }
}

window.sss.fetchPhotosBySelectorsWithAttributes = function(matches) {
      matches.forEach(function(match){
          let element = window.sss.fetchDataBySelectorAndAttribute(match.selector,match.attribute);
          window.sss.addNewPhotos(element);
      });
}

window.sss.fetchDocumentsBySelectorsWithAttributes = function(matches) {
      matches.forEach(function(match){
          let element = window.sss.fetchDataBySelectorAndAttribute(match.selector, match.attribute, match.nameSelector);
          window.sss.addNewDocument(element);
      });
}

window.sss.fetchFeaturesByStrings = function(stringsArray) {
      let matches = [];
      stringsArray.forEach(function(string){
        let textMatches = window.sss.searchTextForValuesAndReturnKeys(window.sss.features, string);
        if (textMatches.length) {
            matches = matches.concat(textMatches).unique();
        }
      });
      window.sss.addNewFeatures(matches);
}

window.sss.fetchCategoryTypesByStrings = function(stringsArray) {
      let matches = [];
      stringsArray.forEach(function(string){
        let textMatches = window.sss.searchTextForValuesAndReturnKeys(window.sss.categoryTypes, string);
        if (textMatches.length) {
            matches = matches.concat(textMatches).unique();
        }
      });
      window.sss.addNewCategoryTypes(matches);
}

window.sss.fetchFrameMaterialsByStrings = function(stringsArray) {
      let matches = [];
      stringsArray.forEach(function(string){
        let textMatches = window.sss.searchTextForValuesAndReturnKeys(window.sss.frameMaterials, string);
        if (textMatches.length) {
            matches = matches.concat(textMatches).unique();
        }
      });
      window.sss.addNewFrameMaterials(matches);
}

window.sss.fetchExteriorMaterialsByStrings = function(stringsArray) {
      let matches = [];
      stringsArray.forEach(function(string){
        let textMatches = window.sss.searchTextForValuesAndReturnKeys(window.sss.exteriorMaterials, string);
        if (textMatches.length) {
            matches = matches.concat(textMatches).unique();
        }
      });
      window.sss.addNewExteriorMaterials(matches);
}

window.sss.fetchLiftSystemsByStrings = function(stringsArray) {
      let matches = [];
      stringsArray.forEach(function(string){
        let textMatches = window.sss.searchTextForValuesAndReturnKeys(window.sss.liftSystems, string);
        if (textMatches.length) {
            matches = matches.concat(textMatches).unique();
        }
      });
      window.sss.addNewLiftSystems(matches);
}

window.sss.fetchFuelTypesByStrings = function(stringsArray) {
      let matches = [];
      stringsArray.forEach(function(string){
        let textMatches = window.sss.searchTextForValuesAndReturnKeys(window.sss.fuelTypes, string);
        if (textMatches.length) {
            matches = matches.concat(textMatches).unique();
        }
      });
      window.sss.addNewFuelTypes(matches);
}

window.sss.fetchIgnitionTypesByStrings = function(stringsArray) {
  let matches = [];
  stringsArray.forEach(function(string){
    let textMatches = window.sss.searchTextForValuesAndReturnKeys(window.sss.ignitionTypes, string);
    if (textMatches.length) {
        matches = matches.concat(textMatches).unique();
    }
  });
  window.sss.addNewIgnitionTypes(matches);
}

window.sss.fetchShapesByStrings = function(stringsArray) {
      let matches = [];
      stringsArray.forEach(function(string){
        let textMatches = window.sss.searchTextForValuesAndReturnKeys(window.sss.shapes, string);
        if (textMatches.length) {
            matches = matches.concat(textMatches).unique();
        }
      });
      window.sss.addNewShapes(matches);
}

window.sss.fetchDescriptionBySelectors = function(cssSelectors) {
  let html = '';
  cssSelectors.forEach(function(cssSelector) {
    jQuery(cssSelector).each(function(){
      var outerHTML = jQuery(this).prop('outerHTML');
      if (outerHTML) {
        html = html + outerHTML;
      }
    });

    jQuery('#sss-html-description-wrapper').text(html);
  });
}

window.sss.addHTMLDescriptionByString = function(string) {
    jQuery('#sss-html-description-wrapper').text(string);
}

window.sss.addDescriptionByString = function(string) {
  jQuery('#sss-description-wrapper').text(string);
}

window.sss.addModelNumberByString = function(string) {
  jQuery('#sss-model-number-wrapper').text(string);
}

window.sss.addSeatHeightByString = function(string) {
  if (string) {
    let height = window.sss.getNumberFromString(string);
    jQuery('#sss-seat-height-wrapper').append('<p>'+ height + '</p>');
  }
}

window.sss.addArmHeightByString = function(string) {
  if (string) {
    let height = window.sss.getNumberFromString(string);
    jQuery('#sss-arm-height-wrapper').append('<p>'+ height + '</p>');
  }
}

window.sss.addBTUByString = function(string) {
  if (string) {
    let btu = window.sss.getNumberFromString(string);
    jQuery('#sss-btu-wrapper').append('<p>'+ btu + '</p>');
  }
}

window.sss.fetchSeatingSurfacesByStrings = function(stringsArray) {
      let matches = [];
      stringsArray.forEach(function(string){
        let textMatches = window.sss.searchTextForValuesAndReturnKeys(window.sss.seatingSurfaces, string);
        if (textMatches.length) {
            matches = matches.concat(textMatches).unique();
        }
      });
      window.sss.addNewSeatingSurfaces(matches);
}

window.sss.fetchDimensions = function(height,width,depth,weight) {
      if (!width) {
          width = 0;
      } else {
        width = window.sss.getNumberFromString(width);
      }
      if (!depth) {
          depth = 0;
      } else {
        depth = window.sss.getNumberFromString(depth);
      }
      if (!height) {
        height = 0;
      } else {
        height = window.sss.getNumberFromString(height);
      }
      if (!weight) {
        weight = 0;
      } else {
        weight = weight.replace(/[^0-9.]/g, '');
        width = window.sss.getNumberFromString(width);
      }
      let calculatedLength = Math.max(width,depth);
      let calcualtedWidth = Math.min(width,depth);
      if (height) {
        jQuery('#sss-height-wrapper').append('<p>'+ height + '</p>');
      }
      if (calcualtedWidth) {
        jQuery('#sss-width-wrapper').append('<p>'+ calcualtedWidth + '</p>');
      }
      if (calculatedLength) {
        jQuery('#sss-length-wrapper').append('<p>'+ calculatedLength + '</p>');
      }
      if (weight) {
          jQuery('#sss-weight-wrapper').append('<p>'+ weight + '</p>');
      }
}
