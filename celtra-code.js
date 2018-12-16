
(function () {
    // Dynamic values from page request

    var script = document.getElementById("celtra-script-1");
    if (!script || script.tagName.toLowerCase() !== 'script')
        throw 'Element with id equal to scriptId does not exist or is not a script.';

    var runtimeParams = { "tagVersion": "6", "deviceInfo": { "deviceType": "Desktop", "primaryHardwareType": "Desktop", "mobileDevice": false, "osName": "OSX", "osVersion": "10.13.5", "platform": "DesktopPlatform", "platformVersion": null, "browserName": "Chrome", "browserVersion": "71.0.3578.80", "browserRenderingEngine": "WebKit", "vendor": "Google", "model": "Chrome - OS X" }, "weather": { "windy": null, "currentCondition": null, "apparentTemperature": null, "temperature": null, "windSpeed": null, "cloudCoverage": null, "conditions": null }, "ipCountryCode": "UA", "ipRegionCode": null, "ipPrincipalSubdivisionCode": "14", "ipCityGeonameId": "709717", "ipCity": "Donetsk", "ipPostalCode": "07512", "ipLat": 47.9917, "ipLng": 37.7759, "accountId": "c7af6e6d", "folderId": "2c9b5014", "placementId": "b7062c5b", "supplierId": null, "sessionId": "s1544176375x1acdf0a082c59cx65879254", "purpose": "live", "secure": 1, "clientTimestamp": "1544176425.355", "clientTimeZoneOffsetInMinutes": -120, "clientIp": "46.150.97.100", "gpsLat": null, "gpsLng": null, "language": "ru", "acceptLanguage": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7", "platformAdvId": null, "platformAdvIdTrackingLimited": null, "userIdentifiers": {}, "variantChoices": {}, "neustarSegment": null, "authBasis": "1544176375982,545950cf,b7062c5b", "authToken": "4889530219ff5eeff33ec752c163f998", "customAudiences": {}, "derivedAudiences": {}, "destinationDefinitions": [], "dynamicContent": {}, "usedCustomFeedFields": [], "dynamicContentMetaData": {}, "customFeedFields": [], "tuneIosQueryStringFragment": null, "tuneAndroidQueryStringFragment": null, "tuneCustomAttributes": {}, "admarvel_format": null, "overrides": { "placementId": "b7062c5b", "customAudiences": {}, "derivedAudiences": {}, "deviceInfo": { "deviceType": "Desktop", "primaryHardwareType": "Desktop", "mobileDevice": false, "osName": "OSX", "osVersion": "10.13.5", "platform": "DesktopPlatform", "platformVersion": null, "browserName": "Chrome", "browserVersion": "71.0.3578.80", "browserRenderingEngine": "WebKit", "vendor": "Google", "model": "Chrome - OS X" }, "language": "ru", "ipCountryCode": "UA", "ipRegionCode": null, "ipPrincipalSubdivisionCode": "14", "ipCityGeonameId": "709717", "ipCity": "Donetsk", "weather": { "windy": null, "currentCondition": null, "apparentTemperature": null, "temperature": null, "windSpeed": null, "cloudCoverage": null, "conditions": null }, "clientTimestamp": "1544176425.355", "clientTimeZoneOffsetInMinutes": -120 }, "utSignals": null, "_mraidCheck": null, "externalAdServer": "Mediasmart", "externalCreativeId": "cr-z00kblm1xzn7ow5335k44rawt", "externalCreativeName": null, "externalPlacementId": null, "externalPlacementName": "Mediasmart%20Simulating%20Environment", "externalSiteId": "76e5a4ab2878494999f2c7c4e8c1e031", "externalSiteName": "http://test.org", "externalSupplierId": "unknown", "externalSupplierName": "unknown", "externalLineItemId": null, "externalSessionId": null, "externalBundleId": "com.mediasmart.test", "externalCreativeWidth": null, "externalCreativeHeight": null, "externalCampaignId": null, "externalCampaignName": "JUMP_SLIGRO_FOOTFALL_Q4-FLIGHT2_NL", "clickUrl": "http://ads.mediasmart.es/m/aclk?ms_op_code=09_52fsqnhlui&r=", "useClickAsDestination": null, "scriptId": "celtra-script-1", "firehoseUrl": null, "track.creativeLoads": "http://ads.mediasmart.es/m/adloaded?ms_op_code=09_52fsqnhlui", "clickEvent": "advertiser", "clickUrlNeedsDest": null, "ncu": null, "firstPage": 1, "dataURIsEnabled": 0, "universalAndAppLinksInMRAID": 0, "monotypeProjectId": "c46ed090-3671-4163-a85b-b06b4038ae38", "iosAdvId": null, "iosAdvIdTrackingLimited": null, "androidAdvId": null, "androidAdvIdTrackingLimited": null, "moatRandom": { "first": 1698527041, "second": 1766620644 }, "skipOffset": null, "_enablePoliteLoading": null, "_politeImageUrl": null, "_politeClickThrough": null, "sticky": null, "_mopubExt": null, "enabledServices": ["googleMaps", "contentSharing"], "vastCompanion": 0, "creativeVariantLockSize": null, "vastVersion": null, "country": "NL", "productCategoryCode": null, "campaignName": "Sligro P17 | 6 dec t/m 31 dec", "agencyId": null, "customPartnerAttributeBrandId": null, "mediasmart_domain": "http://test.org", "mediasmart_tagid": "unknown", "mediasmart_zipcode": "21001", "mediasmart_rtbcategories": "IAB1", "preferredClickThroughWindow": "new", "mediasmart_exchange": "clickcommand", "mediasmart_parentcampaignname": "JUMP_SLIGRO_FOOTFALL_Q4-FLIGHT2_NL", "mediasmart_appname": "Mediasmart%20Simulating%20Environment", "mediasmart_environment": "app", "mediasmart_page": "http://test.org", "expandDirection": "undefined", "mediasmart_areatext": "test%20area%20description", "mediasmart_distance": "55", "mediasmart_creativesize": "0x0", "mediasmart_mscategories": "unknown", "hostPageLoadId": "3203756840641747" };
    runtimeParams.overridableClickThroughDestinationUrl = false;
    runtimeParams.redirectJsClientTimestamp = new Date() / 1000;


    var macros = function (x) {
        if (x instanceof Array) {
            return x.map(macros);
        } else {
            var macroTags = [
                ['%%CACHEBUSTER%%', (Math.random() + '').slice(2)]
                , ['%n', (Math.random() + '').slice(2)]
                , ['%s', "https"]
                , ['{celtraAccountId}', "c7af6e6d"]
                , ['{celtraAgencyId}', ""]
                , ['{celtraAndroidAdvIdTrackingLimitedBoolStr}', ""]
                , ['{celtraAndroidAdvIdTrackingLimited}', ""]
                , ['{celtraAndroidAdvId}', ""]
                , ['{celtraCampaignId:int}', "748376084"]
                , ['{celtraCampaignId}', "2c9b5014"]
                , ['{celtraCampaignName}', "Sligro P17 | 6 dec t/m 31 dec"]
                , ['{celtraCountryCode}', "NL"]
                , ['{celtraCreativeId:int}', "1415139535"]
                , ['{celtraCreativeId}', "545950cf"]
                , ['{celtraCreativeVariant:urlenc}', ""]
                , ['{celtraCreativeVariant}', ""]
                , ['{celtraCustomPartnerAttribute\\[code\\]}', ""]
                , ['{celtraExternalAdServer}', "Mediasmart"]
                , ['{celtraExternalBundleId}', "com.mediasmart.test"]
                , ['{celtraExternalCampaignId}', ""]
                , ['{celtraExternalCampaignName}', "JUMP_SLIGRO_FOOTFALL_Q4-FLIGHT2_NL"]
                , ['{celtraExternalCreativeId}', "cr-z00kblm1xzn7ow5335k44rawt"]
                , ['{celtraExternalCreativeName}', ""]
                , ['{celtraExternalLineItemId}', ""]
                , ['{celtraExternalPlacementId}', ""]
                , ['{celtraExternalPlacementName}', "Mediasmart%20Simulating%20Environment"]
                , ['{celtraExternalSessionId}', ""]
                , ['{celtraExternalSiteId}', "76e5a4ab2878494999f2c7c4e8c1e031"]
                , ['{celtraExternalSiteName}', "http://test.org"]
                , ['{celtraExternalSupplierId}', "unknown"]
                , ['{celtraExternalSupplierName}', "unknown"]
                , ['{celtraIosAdvIdTrackingLimitedBoolStr}', ""]
                , ['{celtraIosAdvIdTrackingLimited}', ""]
                , ['{celtraIosAdvId}', ""]
                , ['{celtraPlacementId:int}', "3070635099"]
                , ['{celtraPlacementId}', "b7062c5b"]
                , ['{celtraPlatformAdvIdTrackingLimited}', ""]
                , ['{celtraPlatformAdvId}', ""]
                , ['{celtraProductCategoryCode}', ""]
                , ['{celtraProto}', "https"]
                , ['{celtraRandom}', (Math.random() + '').slice(2)]
                , ['{celtraSessionId}', "s1544176375x1acdf0a082c59cx65879254"]
                , ['{celtraSupplierId:int}', ""]
                , ['{celtraSupplierId}', ""]

            ];
            return macroTags.reduce(function (str, replacementRule, idx, arr) {
                return str.replace(new RegExp(replacementRule[0], 'ig'), replacementRule[1] ? replacementRule[1] : '');
            }, x);
        }
    };

    // Dynamic values that we do not want to pass forward in urls,
    // so we look them up on every page request based on runtimeParams
    var urlOpenedOverrideUrls = {};
    var storeOpenedOverrideUrls = {};
    var urlOpenedUrlAppendage = "";
    var clickThroughDestinationUrl = null;

    // Less dynamic values for payload request
    var payloadBase = "https://cache-ssl.celtra.com/api/creatives/545950cf/compiled/web.js";
    var cacheParams = { "v": "8-cc74487bf0", "secure": 1, "cachedVariantChoices": "W10-", "inmobi": typeof imraid !== 'undefined' && typeof _im_imai !== 'undefined' ? '1' : '0' };

    var trackers = (function () {
        return [
            // 3rd-party tracker (regular)
            function (event) {
                if (event.name == 'adLoading')
                    return { urls: macros([]) };

                if (event.name == 'firstInteraction')
                    return { urls: macros([]) };

                if (event.name == 'creativeLoaded')
                    return { urls: macros(["http://ads.mediasmart.es/m/adloaded?ms_op_code=09_52fsqnhlui"]) };

                if (event.name == 'creativeRendered')
                    return { urls: macros([]) };

                if (event.name == 'viewable00')
                    return { urls: macros([]) };

                if (event.name == 'viewable501')
                    return { urls: macros([]) };

                if (event.name == 'expandRequested')
                    return { urls: macros([]) };

                if (event.name == 'videoPlayInitiated')
                    return { urls: macros([]) };

                if (event.name == 'videoStart')
                    return { urls: macros([]) };

                if (event.name == 'videoFirstQuartile')
                    return { urls: macros([]) };

                if (event.name == 'videoMidpoint')
                    return { urls: macros([]) };

                if (event.name == 'videoThirdQuartile')
                    return { urls: macros([]) };

                if (event.name == 'videoComplete')
                    return { urls: macros([]) };

                if (event.name == 'videoPause')
                    return { urls: macros([]) };

                if (event.name == 'videoMuted')
                    return { urls: macros([]) };

                if (event.name == 'videoUnmuted')
                    return { urls: macros([]) };

                if (event.name == 'custom')
                    return { urls: macros({}[event.label] || []) };

                if (event.name == 'urlOpened')
                    return { urls: macros({}[event.label] || []) };

                if (event.name == 'storeOpened')
                    return { urls: macros({}[event.label] || []) };
            },
            // 3rd-party tracker (click regular)
            function (event) {
                if (event.name === "firstInteraction")
                    return { urls: macros([]), events: [{ name: 'click' }] };
            },
            // Ad server tracker
            function (event) {
                if (event.name === "firstInteraction")
                    return { urls: macros(["http://ads.mediasmart.es/m/aclk?ms_op_code=09_52fsqnhlui&r="]), events: [{ name: 'clickReportedToSupplier' }] };
            }
        ]
    })();
    trackers.urlsAndEventsFor = function (event) {
        return this.reduce(function (acc, tracker) {
            var ue = tracker(event) || {};
            return {
                urls: acc.urls.concat(ue.urls || []),
                events: acc.events.concat(ue.events || [])
            };
        }, { urls: [], events: [] });
    };


    var adLoadingEvent = { "name": "adLoading", "sessionId": "s1544176375x1acdf0a082c59cx65879254" };
    adLoadingEvent.clientTimestamp = new Date / 1000;

    trackers.urlsAndEventsFor(adLoadingEvent).urls.forEach(function (url) {
        // On IE 8+ URLs containing '%' character sometimes throw an error and
        // stop current JS run loop. One solution  would be to look for that
        // and replace it with '%25', but we've decided not to modify incoming
        // URLs, because this issue is really a combination of two external
        // problems: broken URL on a buggy browser.
        // https://celtra.atlassian.net/browse/MAB-4476
        try {
            (new Image).src = url;
        } catch (e) { }
    });


    function buildPayloadUrl(payloadBase) {
        var pairs = [];
        for (var k in cacheParams)
            pairs.push(encodeURIComponent(k) + '=' + encodeURIComponent(cacheParams[k]));
        return payloadBase + '?' + pairs.join('&');
    }

    var payloadUrl = buildPayloadUrl(payloadBase);


    // Request and run payload
    var payload = document.createElement('script');
    payload.src = payloadUrl;
    payload.onload = function () {

        runtimeParams.payloadJsClientTimestamp = new Date() / 1000;
        window.celtraDeviceInfoRuntimeParams = runtimeParams.deviceInfo;
        window.celtra.payloads[payloadUrl](script, runtimeParams, trackers, urlOpenedOverrideUrls, storeOpenedOverrideUrls, macros, urlOpenedUrlAppendage, clickThroughDestinationUrl);

    };
    script.parentNode.insertBefore(payload, script.nextSibling);



})();

//******************* another