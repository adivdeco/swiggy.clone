

// import { Restrocard } from "./RestroData";
// import Restrocard from "./Restrocard";

// export default function BestRestrurant({foodData}){
//     console.log(foodData); 

//     return(
       
//         <div className="w-[80%] container mx-auto  mt-20  ">
//             <h1>"Discover best restaurants on Dineout</h1>
//              <div className="w-[80%] container mx-auto    mt-20 gap-3 ">
//                                 {
//                                   Restrocard.map((restroData)=>{ <Restrocard key={restroData.info.id}>restroData={restroData}</Restrocard>})
//                                 }
                                
//                         </div>
//        </div>
       
//     )}

    
export const RestroData =  [
    {
    "info": {
        "id": "816534",
        "name": "Kohu",
        "rating": {
            "value": "4.1",
            "count": 162,
            "countDescription": "162 Google ratings"
        },
        "costForTwo": "₹2000 for two",
        "cuisines": ["Chinese", "North Indian"],
        "locality": "Punjabi Bagh",
        "mediaFiles": [
            {
            "type": "IMAGE",
            "id": "2024-01-20T08:51:07.838",
            "url": "v1705740669/68d48b76bc6220fcb6a15a0fdad46be8.jpg"
        }],
        "highlights": ["Alcohol served", "Reservation available", "Parking available", "Free wifi", "SwiggyPay accepted"],
        "locationInfo": {
            "distanceString": "7.2 km",
            "city": {
                "name": "Delhi"
            },
            "formattedAddress": "Punjabi Bagh, Delhi"
        },
        "offerInfoV2": {
            "otherOffers": {
                "logo": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                },
                "offers": [{
                    "header": "FLAT 40% OFF",
                    "offerLogo": {},
                    "type": "GIRF",
                    "subType": "Total bill",
                    "availability": "STACKED_WIDGET_AVAILABILITY_AVAILABLE_TODAY",
                    "dealCategory": "GIRF",
                    "availabilityDescription": "Available today"
                }]
            }
        },
        "vendorOffer": {
            "info": {
                "header": "TODAY’S \nDISCOUNT",
                "type": "FLAT",
                "title": "15% Off",
                "subtitle": "on total bill",
                "description": "FLAT 15% OFF",
                "isOfferApplicableNow": true,
                "tnc": ["Discount on this restaurant is applicable throughout the day for you.", "You can claim this discount on any bill amount. You can pay up to Rs. 3,00,000 per transaction via Swiggy Dineout at a restaurant.", "You get a flat discount on your bill amount with no upper limit.", "This offer cannot be clubbed with an in-house offer or offers from other platforms", "The offer's availability on National/Public Holidays is as per the restaurant's discretion", "The restaurant may levy Service charge/Entry fees as per its discretion", "The discount may not be applicable on Combos, Meal, Beverages, MRP Products, Beer Buckets, Bottled Drinks, Hookah/Seesha, Discounted platters/Thalis, Buffets, as per Catch items and special menus' as per the restaurant's discretion.", "Any items ordered that are not included in the offer will be billed separately.", "Menu prices and items may change without prior notice.", "Weekend and weekdays offer might differ as per restaurant’s discretion."],
                "offerType": "OFFER_TYPE_V2_REGULAR",
                "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                "offersLogoV2": [{
                    "logo": "dineout/rx-card/OFFER.png",
                    "type": "LOGO_TYPE_RX_TILE"
                }, {
                    "logo": "dineout/search/as/Offers.png",
                    "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                }, {
                    "type": "LOGO_TYPE_PAY_BILL"
                }],
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 15
                }
            },
            "otherOffersInfo": [{
                "header": "TODAY’S \nDISCOUNT",
                "type": "FLAT",
                "title": "40% OFF",
                "subtitle": "on total bill",
                "description": "FLAT 40% OFF",
                "isOfferApplicableNow": true,
                "offerType": "OFFER_TYPE_V2_GIRF",
                "offerSubType": "OFFER_SUB_TYPE_TOTAL_BILL",
                "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                "otherLogoContext": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                },
                "dealCategory": "GIRF",
                "availabilityDescription": "Available today",
                "offersLogoV2": [{
                    "logo": "dineout/rx-card/OFFER.png",
                    "type": "LOGO_TYPE_RX_TILE"
                }, {
                    "logo": "dineout/search/as/Offers.png",
                    "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                }, {
                    "type": "LOGO_TYPE_PAY_BILL"
                }],
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 40
                }
            }],
            "infos": [{
                "description": "Up to 10% off with HDFC Bank Credit Card",
                "otherLogoContext": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                },
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 15
                }
            }],
            "offerCount": 4,
            "offerHighlights": [{
                "logoCtx": {
                    "text": "Table booking",
                    "logo": "dineout/rx-card/highlights/book.png"
                }
            }, {
                "logoCtx": {
                    "text": "Free Dessert",
                    "logo": "dineout/free_desert.png"
                }
            }]
        },
        "customerOffer": {
            "info": {
                "description": "+ Up to 10% bank offers",
                "otherLogoContext": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                },
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 15
                }
            },
            "loyaltyInfo": {
                "cta": {},
                "offerDetail": {
                    "type": "FLAT",
                    "title": "₹150 Off",
                    "subtitle": "above ₹1500",
                    "description": " ₹150 off",
                    "logoContext": {
                        "text": "with",
                        "logo": "ONE"
                    },
                    "coupon": {
                        "availableCouponCount": 2
                    },
                    "otherLogoContext": {
                        "logo": "OFFER_LOGO"
                    },
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_FLAT",
                        "discountValue": 150
                    }
                },
                "oneBenefit": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png"
                }
            },
            "otherOffersInfo": [{
                "header": "ADDITIONAL OFFERS",
                "type": "CASHBACK",
                "title": "10%*",
                "description": "10% cashback",
                "logoContext": {},
                "tnc": ["Valid only on Swiggy HDFC Bank Credit Card", "Applicable on a minimum net transaction value of ₹100", "Monthly cashback limit of ₹1500 on Swiggy spends", "Cashback will be processed in the next statement cycle", "Other T&Cs may apply"],
                "coupon": {},
                "adjoiningSubtext": "Above ₹100",
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 10
                }
            }],
            "infos": [{
                "description": "Up to 10% off with bank offers",
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 15
                }
            }],
            "offerCount": 1
        },
        "isPaymentAccepted": true,
        "promoted": true,
        "adTrackingId": "cid=0dfb35d1-0d98-4daa-b546-97afe47bf369~~adtrid=7a30d152-5334-428a-938b-8ae2af1b2d67~~adgrpid=0dfb35d1-0d98-4daa-b546-97afe47bf369#ag1~~cndid=816534~~bp=OLZ7GGkTrUJQT2bBVKqNk6goGBhX0cxIKrKW2NJ1MborefB8NXg7/E7Mz/9DE6DZRcR6hYSU74yZkSuoMnRjscDlHCkU~~mp=SWIGGY_IN~~bl=DINEOUT~~st=~~srvts=1740137352764~~plid=6063bb22-c5fd-4da9-ad5a-97d86b61ddf4~~zoneid=218~~kw=~~lmd=4563.545~~collid=116084",
        "offerInfoV3": {
            "offerLogo": {
                "logo": "dineout/rx-card/OFFER.png"
            },
            "vendorOffer": {
                "title": "Flat 40% off",
                "subtitle": "on pre-booking",
                "subtext": "+ 4 more",
                "style": {
                    "textColour": "text_color_highest_emphasis_inverse",
                    "bgColour": "positive"
                },
                "subtextStyle": {}
            }
        },
        "mediaStyle": {
            "aspectRatio": 1.7778
        },
        "ribbon": [{
            "text": "GIRF SPECIAL",
            "style": {
                "textColour": "text_color_highest_emphasis_inverse",
                "gradientStyle": {
                    "colours": ["#FF2647", "#F6AF0E"]
                }
            }
        }],
        "vendorHighlights": [{
            "logo": {
                "logo": "dineout/rx-card/highlights/book.png"
            },
            "title": "Table booking",
            "style": {
                "textColour": "text_color_med_emphasis",
                "bgColour": "background_button_tertiary_low"
            }
        }, {
            "logo": {
                "logo": "dineout/free_desert.png"
            },
            "title": "Free Dessert",
            "style": {
                "textColour": "text_color_med_emphasis",
                "bgColour": "background_button_tertiary_low"
            }
        }]
    },
    "cta": {
        "link": "https://www.swiggy.com/restaurants/816534/dineout",
        "text": "DINERSONE_REST_DETAIL",
        "type": "DEEPLINK"
    }
}, 


{
    "info": {
        "id": "1000254",
        "name": "Food Lover",
        "rating": {
            "value": "4.8",
            "count": 5,
            "countDescription": "5 Google ratings"
        },
        "costForTwo": "₹500 for two",
        "cuisines": ["Chinese", "Biryani"],
        "locality": " Rohini",
        "mediaFiles": [{
            "type": "IMAGE",
            "id": "2024-11-30T11:20:54.157",
            "name": "Food",
            "url": "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/11/30/c5294a70-57ae-471d-b90c-b4b22728c81b_image06f04af40ff734890bc4400955e72d3e5.JPG"
        }],
        "highlights": ["Smoking area", "SwiggyPay accepted"],
        "locationInfo": {
            "distanceString": "1 km",
            "city": {
                "name": "Delhi"
            },
            "formattedAddress": " Rohini, Delhi"
        },
        "offerInfoV2": {
            "otherOffers": {
                "logo": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                },
                "offers": [{
                    "header": "FLAT 20% OFF",
                    "offerLogo": {},
                    "type": "GIRF",
                    "subType": "Total bill",
                    "availability": "STACKED_WIDGET_AVAILABILITY_AVAILABLE_TODAY",
                    "dealCategory": "GIRF",
                    "availabilityDescription": "Available today"
                }]
            }
        },
        "vendorOffer": {
            "info": {
                "header": "TODAY’S \nDISCOUNT",
                "type": "FLAT",
                "title": "10% Off",
                "subtitle": "on total bill",
                "description": "FLAT 10% OFF",
                "isOfferApplicableNow": true,
                "tnc": ["Discount on this restaurant is applicable throughout the day for you.", "You can claim this discount on any bill amount. You can pay up to Rs. 3,00,000 per transaction via Swiggy Dineout at a restaurant.", "You get a flat discount on your bill amount with no upper limit.", "This offer cannot be clubbed with an in-house offer or offers from other platforms", "The offer's availability on National/Public Holidays is as per the restaurant's discretion", "The restaurant may levy Service charge/Entry fees as per its discretion", "The discount may not be applicable on Combos, Meal, Beverages, MRP Products, Beer Buckets, Bottled Drinks, Hookah/Seesha, Discounted platters/Thalis, Buffets, as per Catch items and special menus' as per the restaurant's discretion.", "Any items ordered that are not included in the offer will be billed separately.", "Menu prices and items may change without prior notice.", "Weekend and weekdays offer might differ as per restaurant’s discretion."],
                "offerType": "OFFER_TYPE_V2_REGULAR",
                "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                "offersLogoV2": [{
                    "logo": "dineout/rx-card/OFFER.png",
                    "type": "LOGO_TYPE_RX_TILE"
                }, {
                    "logo": "dineout/search/as/Offers.png",
                    "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                }, {
                    "type": "LOGO_TYPE_PAY_BILL"
                }],
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 10
                }
            },
            "otherOffersInfo": [{
                "header": "TODAY’S \nDISCOUNT",
                "type": "FLAT",
                "title": "20% OFF",
                "subtitle": "on total bill",
                "description": "FLAT 20% OFF",
                "isOfferApplicableNow": true,
                "offerType": "OFFER_TYPE_V2_GIRF",
                "offerSubType": "OFFER_SUB_TYPE_TOTAL_BILL",
                "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                "otherLogoContext": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                },
                "dealCategory": "GIRF",
                "availabilityDescription": "Available today",
                "offersLogoV2": [{
                    "logo": "dineout/rx-card/OFFER.png",
                    "type": "LOGO_TYPE_RX_TILE"
                }, {
                    "logo": "dineout/search/as/Offers.png",
                    "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                }, {
                    "type": "LOGO_TYPE_PAY_BILL"
                }],
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 20
                }
            }],
            "infos": [{
                "description": "Up to 10% off with HDFC Bank Credit Card",
                "otherLogoContext": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                },
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 15
                }
            }],
            "offerCount": 2,
            "offerHighlights": [{
                "logoCtx": {
                    "text": "Table booking",
                    "logo": "dineout/rx-card/highlights/book.png"
                }
            }]
        },
        "customerOffer": {
            "info": {
                "description": "+ Up to 10% bank offers",
                "otherLogoContext": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                },
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 15
                }
            },
            "loyaltyInfo": {
                "cta": {},
                "offerDetail": {
                    "type": "FLAT",
                    "title": "₹150 Off",
                    "subtitle": "above ₹1500",
                    "description": " ₹150 off",
                    "logoContext": {
                        "text": "with",
                        "logo": "ONE"
                    },
                    "coupon": {
                        "availableCouponCount": 2
                    },
                    "otherLogoContext": {
                        "logo": "OFFER_LOGO"
                    },
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_FLAT",
                        "discountValue": 150
                    }
                },
                "oneBenefit": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png"
                }
            },
            "otherOffersInfo": [{
                "header": "ADDITIONAL OFFERS",
                "type": "CASHBACK",
                "title": "10%*",
                "description": "10% cashback",
                "logoContext": {},
                "tnc": ["Valid only on Swiggy HDFC Bank Credit Card", "Applicable on a minimum net transaction value of ₹100", "Monthly cashback limit of ₹1500 on Swiggy spends", "Cashback will be processed in the next statement cycle", "Other T&Cs may apply"],
                "coupon": {},
                "adjoiningSubtext": "Above ₹100",
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 10
                }
            }],
            "infos": [{
                "description": "Up to 10% off with bank offers",
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 15
                }
            }],
            "offerCount": 1
        },
        "isPaymentAccepted": true,
        "offerInfoV3": {
            "offerLogo": {
                "logo": "dineout/rx-card/OFFER.png"
            },
            "vendorOffer": {
                "title": "Flat 20% off",
                "subtitle": "on pre-booking",
                "subtext": "+ 2 more",
                "style": {
                    "textColour": "text_color_highest_emphasis_inverse",
                    "bgColour": "positive"
                },
                "subtextStyle": {}
            }
        },
        "mediaStyle": {
            "aspectRatio": 1.7778
        },
        "ribbon": [{
            "text": "GIRF SPECIAL",
            "style": {
                "textColour": "text_color_highest_emphasis_inverse",
                "gradientStyle": {
                    "colours": ["#FF2647", "#F6AF0E"]
                }
            }
        }],
        "vendorHighlights": [{
            "logo": {
                "logo": "dineout/rx-card/highlights/book.png"
            },
            "title": "Table booking",
            "style": {
                "textColour": "text_color_med_emphasis",
                "bgColour": "background_button_tertiary_low"
            }
        }]
    },
    "cta": {
        "link": "https://www.swiggy.com/restaurants/1000254/dineout",
        "text": "DINERSONE_REST_DETAIL",
        "type": "DEEPLINK"
    }
},


 {
    "info": {
        "id": "137204",
        "name": "CUE- Culinary Urban Experience",
        "rating": {
            "value": "4.1",
            "count": 643,
            "countDescription": "643 Google ratings"
        },
        "costForTwo": "₹1300 for two",
        "cuisines": ["Chinese", "North Indian"],
        "locality": "Rohini",
        "mediaFiles": [{
            "type": "IMAGE",
            "id": "2022-08-23T03:51:15.689",
            "name": "ambience",
            "url": "v1661226678/vw0zrmp9gfallu8eklfo.jpg"
        }],
        "highlights": ["Parking available", "Smoking area", "SwiggyPay accepted", "Pure veg"],
        "locationInfo": {
            "distanceString": "1.9 km",
            "landmarkName": "Manglam Paradise Mall",
            "city": {
                "name": "Delhi"
            },
            "formattedAddress": "Manglam Paradise Mall, Rohini, Delhi"
        },
        "offerInfoV2": {
            "otherOffers": {
                "logo": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                },
                "offers": [{
                    "header": "FLAT 40% OFF",
                    "offerLogo": {},
                    "type": "GIRF",
                    "subType": "Total bill",
                    "availability": "STACKED_WIDGET_AVAILABILITY_AVAILABLE_TODAY",
                    "dealCategory": "GIRF",
                    "availabilityDescription": "Available today"
                }]
            }
        },
        "vendorOffer": {
            "info": {
                "header": "TODAY’S \nDISCOUNT",
                "type": "FLAT",
                "title": "30% Off",
                "subtitle": "on total bill",
                "description": "FLAT 30% OFF",
                "isOfferApplicableNow": true,
                "tnc": ["Discount on this restaurant is applicable throughout the day for you.", "You can claim this discount on any bill amount. You can pay up to Rs. 3,00,000 per transaction via Swiggy Dineout at a restaurant.", "You get a flat discount on your bill amount with no upper limit.", "This offer cannot be clubbed with an in-house offer or offers from other platforms", "The offer's availability on National/Public Holidays is as per the restaurant's discretion", "The restaurant may levy Service charge/Entry fees as per its discretion", "The discount may not be applicable on Combos, Meal, Beverages, MRP Products, Beer Buckets, Bottled Drinks, Hookah/Seesha, Discounted platters/Thalis, Buffets, as per Catch items and special menus' as per the restaurant's discretion.", "Any items ordered that are not included in the offer will be billed separately.", "Menu prices and items may change without prior notice.", "Weekend and weekdays offer might differ as per restaurant’s discretion."],
                "offerType": "OFFER_TYPE_V2_REGULAR",
                "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                "offersLogoV2": [{
                    "logo": "dineout/rx-card/OFFER.png",
                    "type": "LOGO_TYPE_RX_TILE"
                }, {
                    "logo": "dineout/search/as/Offers.png",
                    "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                }, {
                    "type": "LOGO_TYPE_PAY_BILL"
                }],
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 30
                }
            },
            "otherOffersInfo": [{
                "header": "TODAY’S \nDISCOUNT",
                "type": "FLAT",
                "title": "40% OFF",
                "subtitle": "on total bill",
                "description": "FLAT 40% OFF",
                "isOfferApplicableNow": true,
                "offerType": "OFFER_TYPE_V2_GIRF",
                "offerSubType": "OFFER_SUB_TYPE_TOTAL_BILL",
                "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                "otherLogoContext": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                },
                "dealCategory": "GIRF",
                "availabilityDescription": "Available today",
                "offersLogoV2": [{
                    "logo": "dineout/rx-card/OFFER.png",
                    "type": "LOGO_TYPE_RX_TILE"
                }, {
                    "logo": "dineout/search/as/Offers.png",
                    "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                }, {
                    "type": "LOGO_TYPE_PAY_BILL"
                }],
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 40
                }
            }],
            "infos": [{
                "description": "Up to 10% off with HDFC Bank Credit Card",
                "otherLogoContext": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                },
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 15
                }
            }],
            "offerCount": 2,
            "offerHighlights": [{
                "logoCtx": {
                    "text": "Table booking",
                    "logo": "dineout/rx-card/highlights/book.png"
                }
            }]
        },
        "customerOffer": {
            "info": {
                "description": "+ Up to 10% bank offers",
                "otherLogoContext": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                },
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 15
                }
            },
            "loyaltyInfo": {
                "cta": {},
                "offerDetail": {
                    "type": "FLAT",
                    "title": "₹150 Off",
                    "subtitle": "above ₹1500",
                    "description": " ₹150 off",
                    "logoContext": {
                        "text": "with",
                        "logo": "ONE"
                    },
                    "coupon": {
                        "availableCouponCount": 2
                    },
                    "otherLogoContext": {
                        "logo": "OFFER_LOGO"
                    },
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_FLAT",
                        "discountValue": 150
                    }
                },
                "oneBenefit": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png"
                }
            },
            "otherOffersInfo": [{
                "header": "ADDITIONAL OFFERS",
                "type": "CASHBACK",
                "title": "10%*",
                "description": "10% cashback",
                "logoContext": {},
                "tnc": ["Valid only on Swiggy HDFC Bank Credit Card", "Applicable on a minimum net transaction value of ₹100", "Monthly cashback limit of ₹1500 on Swiggy spends", "Cashback will be processed in the next statement cycle", "Other T&Cs may apply"],
                "coupon": {},
                "adjoiningSubtext": "Above ₹100",
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 10
                }
            }],
            "infos": [{
                "description": "Up to 10% off with bank offers",
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 15
                }
            }],
            "offerCount": 1
        },
        "isPaymentAccepted": true,
        "offerInfoV3": {
            "offerLogo": {
                "logo": "dineout/rx-card/OFFER.png"
            },
            "vendorOffer": {
                "title": "Flat 40% off",
                "subtitle": "on pre-booking",
                "subtext": "+ 2 more",
                "style": {
                    "textColour": "text_color_highest_emphasis_inverse",
                    "bgColour": "positive"
                },
                "subtextStyle": {}
            }
        },
        "vegClassifier": "VEG_CLASSIFIER_VEG",
        "mediaStyle": {
            "aspectRatio": 1.7778
        },
        "ribbon": [{
            "text": "GIRF SPECIAL",
            "style": {
                "textColour": "text_color_highest_emphasis_inverse",
                "gradientStyle": {
                    "colours": ["#FF2647", "#F6AF0E"]
                }
            }
        }],
        "vendorHighlights": [{
            "logo": {
                "logo": "dineout/rx-card/highlights/book.png"
            },
            "title": "Table booking",
            "style": {
                "textColour": "text_color_med_emphasis",
                "bgColour": "background_button_tertiary_low"
            }
        }]
    },
    "cta": {
        "link": "https://www.swiggy.com/restaurants/137204/dineout",
        "text": "DINERSONE_REST_DETAIL",
        "type": "DEEPLINK"
    }
},

{
    "info": {
        "id": "68283",
        "name": "Pind Balluchi",
        "rating": {
            "value": "3.9",
            "count": 3169,
            "countDescription": "3K+ Google ratings"
        },
        "costForTwo": "₹1400 for two",
        "cuisines": ["Mughlai", "North Indian"],
        "locality": "Netaji Subhash Place",
        "mediaFiles": [{
            "type": "IMAGE",
            "id": "2024-06-04T09:59:28.929",
            "url": "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/6/4/be4e1110-c97a-4d9b-be1a-35598593695d_180b1f8274cf6472ab7845ddbf2b37fbc.JPG"
        }],
        "highlights": ["Parking available", "SwiggyPay accepted"],
        "locationInfo": {
            "distanceString": "6.4 km",
            "landmarkName": "PP Tower",
            "city": {
                "name": "Delhi"
            },
            "formattedAddress": "PP Tower, Netaji Subhash Place, Delhi"
        },
        "offerInfoV2": {
            "otherOffers": {
                "logo": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                },
                "offers": [{
                    "header": "FLAT 30% OFF",
                    "offerLogo": {},
                    "type": "GIRF",
                    "subType": "Total bill",
                    "availability": "STACKED_WIDGET_AVAILABILITY_AVAILABLE_TODAY",
                    "dealCategory": "GIRF",
                    "availabilityDescription": "Available today"
                }]
            }
        },
        "vendorOffer": {
            "otherOffersInfo": [{
                "header": "TODAY’S \nDISCOUNT",
                "type": "FLAT",
                "title": "30% OFF",
                "subtitle": "on total bill",
                "description": "FLAT 30% OFF",
                "isOfferApplicableNow": true,
                "offerType": "OFFER_TYPE_V2_GIRF",
                "offerSubType": "OFFER_SUB_TYPE_TOTAL_BILL",
                "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                "otherLogoContext": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                },
                "dealCategory": "GIRF",
                "availabilityDescription": "Available today",
                "offersLogoV2": [{
                    "logo": "dineout/rx-card/OFFER.png",
                    "type": "LOGO_TYPE_RX_TILE"
                }, {
                    "logo": "dineout/search/as/Offers.png",
                    "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                }, {
                    "type": "LOGO_TYPE_PAY_BILL"
                }],
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 30
                }
            }],
            "infos": [{
                "header": "Get extra 10% off using GIRFSPECIALS",
                "description": " 10% off with GIRFSPECIALS + Up to 10% bank offers",
                "coupon": {
                    "code": "GIRFSPECIALS"
                },
                "otherLogoContext": {
                    "logo": "OFFER_LOGO"
                },
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 10
                }
            }],
            "offerCount": 2,
            "offerHighlights": [{
                "logoCtx": {
                    "text": "Table booking",
                    "logo": "dineout/rx-card/highlights/book.png"
                }
            }]
        },
        "customerOffer": {
            "info": {
                "description": "+ Up to 10% bank offers",
                "otherLogoContext": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                },
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 15
                }
            },
            "loyaltyInfo": {
                "cta": {},
                "offerDetail": {
                    "type": "FLAT",
                    "title": "₹150 Off",
                    "subtitle": "above ₹1500",
                    "description": " ₹150 off",
                    "logoContext": {
                        "text": "with",
                        "logo": "ONE"
                    },
                    "coupon": {
                        "availableCouponCount": 2
                    },
                    "otherLogoContext": {
                        "logo": "OFFER_LOGO"
                    },
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_FLAT",
                        "discountValue": 150
                    }
                },
                "oneBenefit": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png"
                }
            },
            "otherOffersInfo": [{
                "header": "ADDITIONAL OFFERS",
                "type": "CASHBACK",
                "title": "10%*",
                "description": "10% cashback",
                "logoContext": {},
                "tnc": ["Valid only on Swiggy HDFC Bank Credit Card", "Applicable on a minimum net transaction value of ₹100", "Monthly cashback limit of ₹1500 on Swiggy spends", "Cashback will be processed in the next statement cycle", "Other T&Cs may apply"],
                "coupon": {},
                "adjoiningSubtext": "Above ₹100",
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 10
                }
            }],
            "infos": [{
                "description": "Up to 10% off with bank offers",
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 15
                }
            }],
            "offerCount": 1
        },
        "isPaymentAccepted": true,
        "promoted": true,
        "adTrackingId": "cid=a0de63a7-ca51-4ed6-804d-47d75e2e490c~~adtrid=0e02fac3-373b-40f8-805d-22ec0dbd6b34~~adgrpid=a0de63a7-ca51-4ed6-804d-47d75e2e490c#ag1~~cndid=68283~~bp=1rWoH1a8c5bq18EavgoPfEdsywcC3qmum6QH6xU0QG8sWJq/ruu0urFA4sbtishMqLmCODxvADSL8FON/Jnsf2CHbEcq~~mp=SWIGGY_IN~~bl=DINEOUT~~st=~~srvts=1740137352764~~plid=6063bb22-c5fd-4da9-ad5a-97d86b61ddf4~~zoneid=218~~kw=~~lmd=4878.7783~~collid=116084",
        "offerInfoV3": {
            "offerLogo": {
                "logo": "dineout/rx-card/OFFER.png"
            },
            "vendorOffer": {
                "title": "Flat 30% off",
                "subtitle": "on pre-booking",
                "subtext": "+ 2 more",
                "style": {
                    "textColour": "text_color_highest_emphasis_inverse",
                    "bgColour": "positive"
                },
                "subtextStyle": {}
            },
            "couponOffer": {
                "title": "Get extra 10% off using GIRFSPECIALS",
                "style": {
                    "textColour": "primary_accent"
                },
                "subtextStyle": {}
            }
        },
        "mediaStyle": {
            "aspectRatio": 1.7778
        },
        "ribbon": [{
            "text": "GIRF SPECIAL",
            "style": {
                "textColour": "text_color_highest_emphasis_inverse",
                "gradientStyle": {
                    "colours": ["#FF2647", "#F6AF0E"]
                }
            }
        }],
        "vendorHighlights": [{
            "logo": {
                "logo": "dineout/rx-card/highlights/book.png"
            },
            "title": "Table booking",
            "style": {
                "textColour": "text_color_med_emphasis",
                "bgColour": "background_button_tertiary_low"
            }
        }]
    },
    "cta": {
        "link": "https://www.swiggy.com/restaurants/68283/dineout",
        "text": "DINERSONE_REST_DETAIL",
        "type": "DEEPLINK"
    }
},

{
    "info": {
        "id": "371850",
        "name": "Roslyn Coffee",
        "rating": {
            "value": "3.9",
            "count": 254,
            "countDescription": "254 Google ratings"
        },
        "costForTwo": "₹800 for two",
        "cuisines": ["Continental", "Fast Food"],
        "locality": "Rohini",
        "mediaFiles": [{
            "type": "IMAGE",
            "id": "2022-12-21T08:10:32.927",
            "url": "v1671610234/4257960e5156489346b1442c2ab66d94.webp"
        }],
        "highlights": ["Parking available", "SwiggyPay accepted"],
        "locationInfo": {
            "distanceString": "2.2 km",
            "landmarkName": "Unity One Mall",
            "city": {
                "name": "Delhi"
            },
            "formattedAddress": "Unity One Mall, Rohini, Delhi"
        },
        "offerInfoV2": {
            "vendorOffer": {
                "header": "FLAT 10% OFF",
                "offerLogo": {}
            },
            "customerOffer": {
                "header": "+Up to 10% off with HDFC Bank Credit Card",
                "offerLogo": {}
            }
        },
        "vendorOffer": {
            "info": {
                "header": "TODAY’S \nDISCOUNT",
                "type": "FLAT",
                "title": "10% Off",
                "subtitle": "on total bill",
                "description": "FLAT 10% OFF",
                "isOfferApplicableNow": true,
                "tnc": ["Discount on this restaurant is applicable throughout the day for you.", "You can claim this discount on any bill amount. You can pay up to Rs. 3,00,000 per transaction via Swiggy Dineout at a restaurant.", "You get a flat discount on your bill amount with no upper limit.", "This offer cannot be clubbed with an in-house offer or offers from other platforms", "The offer's availability on National/Public Holidays is as per the restaurant's discretion", "The restaurant may levy Service charge/Entry fees as per its discretion", "The discount may not be applicable on Combos, Meal, Beverages, MRP Products, Beer Buckets, Bottled Drinks, Hookah/Seesha, Discounted platters/Thalis, Buffets, as per Catch items and special menus' as per the restaurant's discretion.", "Any items ordered that are not included in the offer will be billed separately.", "Menu prices and items may change without prior notice.", "Weekend and weekdays offer might differ as per restaurant’s discretion."],
                "offerType": "OFFER_TYPE_V2_REGULAR",
                "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                "offersLogoV2": [{
                    "logo": "dineout/rx-card/OFFER.png",
                    "type": "LOGO_TYPE_RX_TILE"
                }, {
                    "logo": "dineout/search/as/Offers.png",
                    "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                }, {
                    "type": "LOGO_TYPE_PAY_BILL"
                }],
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 10
                }
            },
            "infos": [{
                "description": "Up to 10% off with HDFC Bank Credit Card",
                "otherLogoContext": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                },
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 15
                }
            }],
            "offerCount": 1,
            "offerHighlights": [{
                "logoCtx": {
                    "text": "Table booking",
                    "logo": "dineout/rx-card/highlights/book.png"
                }
            }]
        },
        "customerOffer": {
            "info": {
                "description": "+ Up to 10% bank offers",
                "otherLogoContext": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                },
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 15
                }
            },
            "loyaltyInfo": {
                "cta": {},
                "offerDetail": {
                    "type": "FLAT",
                    "title": "₹150 Off",
                    "subtitle": "above ₹1500",
                    "description": " ₹150 off",
                    "logoContext": {
                        "text": "with",
                        "logo": "ONE"
                    },
                    "coupon": {
                        "availableCouponCount": 2
                    },
                    "otherLogoContext": {
                        "logo": "OFFER_LOGO"
                    },
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_FLAT",
                        "discountValue": 150
                    }
                },
                "oneBenefit": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png"
                }
            },
            "otherOffersInfo": [{
                "header": "ADDITIONAL OFFERS",
                "type": "CASHBACK",
                "title": "10%*",
                "description": "10% cashback",
                "logoContext": {},
                "tnc": ["Valid only on Swiggy HDFC Bank Credit Card", "Applicable on a minimum net transaction value of ₹100", "Monthly cashback limit of ₹1500 on Swiggy spends", "Cashback will be processed in the next statement cycle", "Other T&Cs may apply"],
                "coupon": {},
                "adjoiningSubtext": "Above ₹100",
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 10
                }
            }],
            "infos": [{
                "description": "Up to 10% off with bank offers",
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 15
                }
            }],
            "offerCount": 1
        },
        "isPaymentAccepted": true,
        "offerInfoV3": {
            "offerLogo": {
                "logo": "dineout/rx-card/OFFER.png"
            },
            "vendorOffer": {
                "title": "Flat 10% off",
                "subtitle": "on walk-in",
                "subtext": "+ 1 more",
                "style": {
                    "textColour": "text_color_highest_emphasis_inverse",
                    "bgColour": "positive"
                },
                "subtextStyle": {}
            }
        },
        "mediaStyle": {
            "aspectRatio": 1.7778
        },
        "vendorHighlights": [{
            "logo": {
                "logo": "dineout/rx-card/highlights/book.png"
            },
            "title": "Table booking",
            "style": {
                "textColour": "text_color_med_emphasis",
                "bgColour": "background_button_tertiary_low"
            }
        }]
    },
    "cta": {
        "link": "https://www.swiggy.com/restaurants/371850/dineout",
        "text": "DINERSONE_REST_DETAIL",
        "type": "DEEPLINK"
    }
}, 

{
    "info": {
        "id": "821686",
        "name": "Zoca Diner",
        "rating": {
            "value": "4.4",
            "count": 247,
            "countDescription": "247 Google ratings"
        },
        "costForTwo": "₹1400 for two",
        "cuisines": ["Chinese", "North Indian"],
        "locality": "Rohini",
        "mediaFiles": [{
            "type": "IMAGE",
            "id": "2024-09-02T13:40:19.996",
            "url": "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/9/2/4b63b414-156c-43e0-8944-2cc912a60813_Screenshot20240902190650ca4e5ef38da24f66b119513d35ca5658.PNG"
        }],
        "highlights": ["Reservation available", "Parking available", "Free wifi", "SwiggyPay accepted"],
        "locationInfo": {
            "distanceString": "2.2 km",
            "landmarkName": "Unity One Mall",
            "city": {
                "name": "Delhi"
            },
            "formattedAddress": "Unity One Mall, Rohini, Delhi"
        },
        "offerInfoV2": {
            "otherOffers": {
                "logo": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                },
                "offers": [{
                    "header": "FLAT 50% OFF",
                    "offerLogo": {},
                    "type": "GIRF",
                    "subType": "Total bill",
                    "availability": "STACKED_WIDGET_AVAILABILITY_AVAILABLE_TODAY",
                    "dealCategory": "GIRF",
                    "availabilityDescription": "Available today"
                }]
            }
        },
        "vendorOffer": {
            "info": {
                "header": "TODAY’S \nDISCOUNT",
                "type": "FLAT",
                "title": "20% Off",
                "subtitle": "on total bill",
                "description": "FLAT 20% OFF",
                "isOfferApplicableNow": true,
                "tnc": ["Discount on this restaurant is applicable throughout the day for you.", "You can claim this discount on any bill amount. You can pay up to Rs. 3,00,000 per transaction via Swiggy Dineout at a restaurant.", "You get a flat discount on your bill amount with no upper limit.", "This offer cannot be clubbed with an in-house offer or offers from other platforms", "The offer's availability on National/Public Holidays is as per the restaurant's discretion", "The restaurant may levy Service charge/Entry fees as per its discretion", "The discount may not be applicable on Combos, Meal, Beverages, MRP Products, Beer Buckets, Bottled Drinks, Hookah/Seesha, Discounted platters/Thalis, Buffets, as per Catch items and special menus' as per the restaurant's discretion.", "Any items ordered that are not included in the offer will be billed separately.", "Menu prices and items may change without prior notice.", "Weekend and weekdays offer might differ as per restaurant’s discretion."],
                "offerType": "OFFER_TYPE_V2_REGULAR",
                "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                "offersLogoV2": [{
                    "logo": "dineout/rx-card/OFFER.png",
                    "type": "LOGO_TYPE_RX_TILE"
                }, {
                    "logo": "dineout/search/as/Offers.png",
                    "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                }, {
                    "type": "LOGO_TYPE_PAY_BILL"
                }],
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 20
                }
            },
            "otherOffersInfo": [{
                "header": "TODAY’S \nDISCOUNT",
                "type": "FLAT",
                "title": "50% OFF",
                "subtitle": "on total bill",
                "description": "FLAT 50% OFF",
                "isOfferApplicableNow": true,
                "offerType": "OFFER_TYPE_V2_GIRF",
                "offerSubType": "OFFER_SUB_TYPE_TOTAL_BILL",
                "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                "otherLogoContext": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                },
                "dealCategory": "GIRF",
                "availabilityDescription": "Available today",
                "offersLogoV2": [{
                    "logo": "dineout/rx-card/OFFER.png",
                    "type": "LOGO_TYPE_RX_TILE"
                }, {
                    "logo": "dineout/search/as/Offers.png",
                    "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                }, {
                    "type": "LOGO_TYPE_PAY_BILL"
                }],
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 50
                }
            }],
            "infos": [{
                "header": "Get extra 10% off using GIRFSPECIALS",
                "description": " 10% off with GIRFSPECIALS + Up to 10% bank offers",
                "coupon": {
                    "code": "GIRFSPECIALS"
                },
                "otherLogoContext": {
                    "logo": "OFFER_LOGO"
                },
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 10
                }
            }],
            "offerCount": 4,
            "offerHighlights": [{
                "logoCtx": {
                    "text": "Table booking",
                    "logo": "dineout/rx-card/highlights/book.png"
                }
            }]
        },
        "customerOffer": {
            "info": {
                "description": "+ Up to 10% bank offers",
                "otherLogoContext": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                },
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 15
                }
            },
            "loyaltyInfo": {
                "cta": {},
                "offerDetail": {
                    "type": "FLAT",
                    "title": "₹150 Off",
                    "subtitle": "above ₹1500",
                    "description": " ₹150 off",
                    "logoContext": {
                        "text": "with",
                        "logo": "ONE"
                    },
                    "coupon": {
                        "availableCouponCount": 2
                    },
                    "otherLogoContext": {
                        "logo": "OFFER_LOGO"
                    },
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_FLAT",
                        "discountValue": 150
                    }
                },
                "oneBenefit": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png"
                }
            },
            "otherOffersInfo": [{
                "header": "ADDITIONAL OFFERS",
                "type": "CASHBACK",
                "title": "10%*",
                "description": "10% cashback",
                "logoContext": {},
                "tnc": ["Valid only on Swiggy HDFC Bank Credit Card", "Applicable on a minimum net transaction value of ₹100", "Monthly cashback limit of ₹1500 on Swiggy spends", "Cashback will be processed in the next statement cycle", "Other T&Cs may apply"],
                "coupon": {},
                "adjoiningSubtext": "Above ₹100",
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 10
                }
            }],
            "infos": [{
                "description": "Up to 10% off with bank offers",
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 15
                }
            }],
            "offerCount": 1
        },
        "isPaymentAccepted": true,
        "offerInfoV3": {
            "offerLogo": {
                "logo": "dineout/rx-card/OFFER.png"
            },
            "vendorOffer": {
                "title": "Flat 50% off",
                "subtitle": "on pre-booking",
                "subtext": "+ 4 more",
                "style": {
                    "textColour": "text_color_highest_emphasis_inverse",
                    "bgColour": "positive"
                },
                "subtextStyle": {}
            },
            "couponOffer": {
                "title": "Get extra 10% off using GIRFSPECIALS",
                "style": {
                    "textColour": "primary_accent"
                },
                "subtextStyle": {}
            }
        },
        "mediaStyle": {
            "aspectRatio": 1.7778
        },
        "ribbon": [{
            "text": "GIRF SPECIAL",
            "style": {
                "textColour": "text_color_highest_emphasis_inverse",
                "gradientStyle": {
                    "colours": ["#FF2647", "#F6AF0E"]
                }
            }
        }],
        "vendorHighlights": [{
            "logo": {
                "logo": "dineout/rx-card/highlights/book.png"
            },
            "title": "Table booking",
            "style": {
                "textColour": "text_color_med_emphasis",
                "bgColour": "background_button_tertiary_low"
            }
        }]
    },
    "cta": {
        "link": "https://www.swiggy.com/restaurants/821686/dineout",
        "text": "DINERSONE_REST_DETAIL",
        "type": "DEEPLINK"
    }
}, 

{
    "info": {
        "id": "893829",
        "name": "House Of Wok Prive",
        "rating": {
            "value": "4.8",
            "count": 176,
            "countDescription": "176 Google ratings"
        },
        "costForTwo": "₹1800 for two",
        "cuisines": ["Chinese", "Asian"],
        "locality": "Punjabi Bagh",
        "mediaFiles": [{
            "type": "IMAGE",
            "id": "2024-08-31T12:12:44.946",
            "url": "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/8/31/040db488-46ca-4212-a3f0-95c70e6d2a90_image0a637598454b04a8cbaa56f5c7a2f2553.JPG"
        }],
        "highlights": ["Reservation available", "SwiggyPay accepted"],
        "locationInfo": {
            "distanceString": "7.6 km",
            "city": {
                "name": "Delhi"
            },
            "formattedAddress": "Punjabi Bagh, Delhi"
        },
        "offerInfoV2": {
            "otherOffers": {
                "logo": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                },
                "offers": [{
                    "header": "FLAT 25% OFF",
                    "offerLogo": {},
                    "availability": "STACKED_WIDGET_AVAILABILITY_AVAILABLE_TODAY",
                    "dealCategory": "Pre-Book",
                    "availabilityDescription": "Available today"
                }]
            }
        },
        "vendorOffer": {
            "otherOffersInfo": [{
                "header": "TODAY’S \nDISCOUNT",
                "type": "FLAT",
                "title": "25% OFF",
                "description": "FLAT 25% OFF",
                "isOfferApplicableNow": true,
                "offerType": "OFFER_TYPE_V2_PRE_BOOK",
                "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                "otherLogoContext": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                },
                "dealCategory": "Pre-Book",
                "availabilityDescription": "Available today",
                "offersLogoV2": [{
                    "logo": "dineout/rx-card/OFFER.png",
                    "type": "LOGO_TYPE_RX_TILE"
                }, {
                    "logo": "dineout/search/as/Offers.png",
                    "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                }, {
                    "type": "LOGO_TYPE_PAY_BILL"
                }],
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 25
                }
            }],
            "infos": [{
                "description": "Up to 10% off with HDFC Bank Credit Card",
                "otherLogoContext": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                },
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 15
                }
            }],
            "offerCount": 3,
            "offerHighlights": [{
                "logoCtx": {
                    "text": "Table booking",
                    "logo": "dineout/rx-card/highlights/book.png"
                }
            }]
        },
        "customerOffer": {
            "info": {
                "description": "+ Up to 10% bank offers",
                "otherLogoContext": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                },
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 15
                }
            },
            "loyaltyInfo": {
                "cta": {},
                "offerDetail": {
                    "type": "FLAT",
                    "title": "₹150 Off",
                    "subtitle": "above ₹1500",
                    "description": " ₹150 off",
                    "logoContext": {
                        "text": "with",
                        "logo": "ONE"
                    },
                    "coupon": {
                        "availableCouponCount": 2
                    },
                    "otherLogoContext": {
                        "logo": "OFFER_LOGO"
                    },
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_FLAT",
                        "discountValue": 150
                    }
                },
                "oneBenefit": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png"
                }
            },
            "otherOffersInfo": [{
                "header": "ADDITIONAL OFFERS",
                "type": "CASHBACK",
                "title": "10%*",
                "description": "10% cashback",
                "logoContext": {},
                "tnc": ["Valid only on Swiggy HDFC Bank Credit Card", "Applicable on a minimum net transaction value of ₹100", "Monthly cashback limit of ₹1500 on Swiggy spends", "Cashback will be processed in the next statement cycle", "Other T&Cs may apply"],
                "coupon": {},
                "adjoiningSubtext": "Above ₹100",
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 10
                }
            }],
            "infos": [{
                "description": "Up to 10% off with bank offers",
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 15
                }
            }],
            "offerCount": 1
        },
        "isPaymentAccepted": true,
        "promoted": true,
        "adTrackingId": "cid=585f8877-be4c-4d88-b513-4fa94a104508~~adtrid=c233219c-3102-4946-aaa4-7e34a0709317~~adgrpid=585f8877-be4c-4d88-b513-4fa94a104508#ag1~~cndid=893829~~bp=LbZ9DHCkszo7WPaFX8uJYu9FkW6rizKzWWCnQE5XC6Zqko4Mf6iSjZI9m1o8nL9qVGkk7DMTi6PJISbLwHhIndoKyU1J~~mp=SWIGGY_IN~~bl=DINEOUT~~st=~~srvts=1740137352764~~plid=6063bb22-c5fd-4da9-ad5a-97d86b61ddf4~~zoneid=218~~kw=~~lmd=4818.8867~~collid=116084",
        "offerInfoV3": {
            "offerLogo": {
                "logo": "dineout/rx-card/OFFER.png"
            },
            "vendorOffer": {
                "title": "Flat 25% off",
                "subtitle": "on pre-booking",
                "subtext": "+ 3 more",
                "style": {
                    "textColour": "text_color_highest_emphasis_inverse",
                    "bgColour": "positive"
                },
                "subtextStyle": {}
            }
        },
        "mediaStyle": {
            "aspectRatio": 1.7778
        },
        "vendorHighlights": [{
            "logo": {
                "logo": "dineout/rx-card/highlights/book.png"
            },
            "title": "Table booking",
            "style": {
                "textColour": "text_color_med_emphasis",
                "bgColour": "background_button_tertiary_low"
            }
        }]
    },
    "cta": {
        "link": "https://www.swiggy.com/restaurants/893829/dineout",
        "text": "DINERSONE_REST_DETAIL",
        "type": "DEEPLINK"
    }
}, {
    "info": {
        "id": "307466",
        "name": "Mosaic - Crowne Plaza Rohini",
        "rating": {
            "value": "4.4",
            "count": 1237,
            "countDescription": "1K+ Google ratings"
        },
        "costForTwo": "₹3000 for two",
        "cuisines": ["Chinese", "Continental"],
        "locality": "Rohini",
        "mediaFiles": [{
            "type": "IMAGE",
            "id": "2023-01-15T21:00:14.125",
            "name": "ambience",
            "url": "v1673816415/c107452669db828a6a32b97383de4804.jpg"
        }],
        "highlights": ["Parking available", "Valet parking", "SwiggyPay accepted"],
        "locationInfo": {
            "distanceString": "2.3 km",
            "landmarkName": "Crown Plaza",
            "city": {
                "name": "Delhi"
            },
            "formattedAddress": "Crown Plaza, Rohini, Delhi"
        },
        "offerInfoV2": {
            "otherOffers": {
                "logo": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                },
                "offers": [{
                    "header": "FLAT 25% OFF",
                    "offerLogo": {},
                    "availability": "STACKED_WIDGET_AVAILABILITY_AVAILABLE_TODAY",
                    "dealCategory": "Pre-Book",
                    "availabilityDescription": "Available today"
                }]
            }
        },
        "vendorOffer": {
            "info": {
                "header": "TODAY’S \nDISCOUNT",
                "type": "FLAT",
                "title": "15% Off",
                "subtitle": "on total bill",
                "description": "FLAT 15% OFF",
                "isOfferApplicableNow": true,
                "tnc": ["Discount on this restaurant is applicable throughout the day for you.", "You can claim this discount on any bill amount. You can pay up to Rs. 3,00,000 per transaction via Swiggy Dineout at a restaurant.", "You get a flat discount on your bill amount with no upper limit.", "This offer cannot be clubbed with an in-house offer or offers from other platforms", "The offer's availability on National/Public Holidays is as per the restaurant's discretion", "The restaurant may levy Service charge/Entry fees as per its discretion", "The discount may not be applicable on Combos, Meal, Beverages, MRP Products, Beer Buckets, Bottled Drinks, Hookah/Seesha, Discounted platters/Thalis, Buffets, as per Catch items and special menus' as per the restaurant's discretion.", "Any items ordered that are not included in the offer will be billed separately.", "Menu prices and items may change without prior notice.", "Weekend and weekdays offer might differ as per restaurant’s discretion."],
                "offerType": "OFFER_TYPE_V2_REGULAR",
                "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                "offersLogoV2": [{
                    "logo": "dineout/rx-card/OFFER.png",
                    "type": "LOGO_TYPE_RX_TILE"
                }, {
                    "logo": "dineout/search/as/Offers.png",
                    "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                }, {
                    "type": "LOGO_TYPE_PAY_BILL"
                }],
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 15
                }
            },
            "otherOffersInfo": [{
                "header": "TODAY’S \nDISCOUNT",
                "type": "FLAT",
                "title": "25% OFF",
                "description": "FLAT 25% OFF",
                "isOfferApplicableNow": true,
                "offerType": "OFFER_TYPE_V2_PRE_BOOK",
                "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                "otherLogoContext": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                },
                "dealCategory": "Pre-Book",
                "availabilityDescription": "Available today",
                "offersLogoV2": [{
                    "logo": "dineout/rx-card/OFFER.png",
                    "type": "LOGO_TYPE_RX_TILE"
                }, {
                    "logo": "dineout/search/as/Offers.png",
                    "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                }, {
                    "type": "LOGO_TYPE_PAY_BILL"
                }],
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 25
                }
            }],
            "infos": [{
                "description": "Up to 10% off with HDFC Bank Credit Card",
                "otherLogoContext": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                },
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 15
                }
            }],
            "offerCount": 2,
            "offerHighlights": [{
                "logoCtx": {
                    "text": "Table booking",
                    "logo": "dineout/rx-card/highlights/book.png"
                }
            }]
        },
        "customerOffer": {
            "info": {
                "description": "+ Up to 10% bank offers",
                "otherLogoContext": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                },
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 15
                }
            },
            "loyaltyInfo": {
                "cta": {},
                "offerDetail": {
                    "type": "FLAT",
                    "title": "₹150 Off",
                    "subtitle": "above ₹1500",
                    "description": " ₹150 off",
                    "logoContext": {
                        "text": "with",
                        "logo": "ONE"
                    },
                    "coupon": {
                        "availableCouponCount": 2
                    },
                    "otherLogoContext": {
                        "logo": "OFFER_LOGO"
                    },
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_FLAT",
                        "discountValue": 150
                    }
                },
                "oneBenefit": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png"
                }
            },
            "otherOffersInfo": [{
                "header": "ADDITIONAL OFFERS",
                "type": "CASHBACK",
                "title": "10%*",
                "description": "10% cashback",
                "logoContext": {},
                "tnc": ["Valid only on Swiggy HDFC Bank Credit Card", "Applicable on a minimum net transaction value of ₹100", "Monthly cashback limit of ₹1500 on Swiggy spends", "Cashback will be processed in the next statement cycle", "Other T&Cs may apply"],
                "coupon": {},
                "adjoiningSubtext": "Above ₹100",
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 10
                }
            }],
            "infos": [{
                "description": "Up to 10% off with bank offers",
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 15
                }
            }],
            "offerCount": 1
        },
        "isPaymentAccepted": true,
        "offerInfoV3": {
            "offerLogo": {
                "logo": "dineout/rx-card/OFFER.png"
            },
            "vendorOffer": {
                "title": "Flat 25% off",
                "subtitle": "on pre-booking",
                "subtext": "+ 2 more",
                "style": {
                    "textColour": "text_color_highest_emphasis_inverse",
                    "bgColour": "positive"
                },
                "subtextStyle": {}
            }
        },
        "mediaStyle": {
            "aspectRatio": 1.7778
        },
        "vendorHighlights": [{
            "logo": {
                "logo": "dineout/rx-card/highlights/book.png"
            },
            "title": "Table booking",
            "style": {
                "textColour": "text_color_med_emphasis",
                "bgColour": "background_button_tertiary_low"
            }
        }]
    },
    "cta": {
        "link": "https://www.swiggy.com/restaurants/307466/dineout",
        "text": "DINERSONE_REST_DETAIL",
        "type": "DEEPLINK"
    }
}, {
    "info": {
        "id": "21552",
        "name": "Metro Grill",
        "rating": {
            "value": "4.1",
            "count": 1728,
            "countDescription": "1K+ Google ratings"
        },
        "costForTwo": "₹1500 for two",
        "cuisines": ["North Indian", "Chinese"],
        "locality": "Rohini",
        "mediaFiles": [{
            "type": "IMAGE",
            "id": "2025-02-20T07:33:21.335",
            "url": "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/2/20/dda2874d-be1a-42d9-86c1-9ea7a83afa8c_image287e6180abf6a45029e8c3cfabe3c58f2.JPG"
        }],
        "highlights": ["Alcohol served", "Parking available", "Free wifi", "SwiggyPay accepted"],
        "locationInfo": {
            "distanceString": "2.2 km",
            "landmarkName": "City Centre Mall",
            "city": {
                "name": "Delhi"
            },
            "formattedAddress": "City Centre Mall, Rohini, Delhi"
        },
        "offerInfoV2": {
            "vendorOffer": {
                "header": "FLAT 25% OFF",
                "offerLogo": {}
            },
            "customerOffer": {
                "header": "+Up to 10% off with HDFC Bank Credit Card",
                "offerLogo": {}
            }
        },
        "vendorOffer": {
            "info": {
                "header": "TODAY’S \nDISCOUNT",
                "type": "FLAT",
                "title": "25% Off",
                "subtitle": "on total bill",
                "description": "FLAT 25% OFF",
                "isOfferApplicableNow": true,
                "tnc": ["Discount on this restaurant is applicable throughout the day for you.", "You can claim this discount on any bill amount. You can pay up to Rs. 3,00,000 per transaction via Swiggy Dineout at a restaurant.", "You get a flat discount on your bill amount with no upper limit.", "This offer cannot be clubbed with an in-house offer or offers from other platforms", "The offer's availability on National/Public Holidays is as per the restaurant's discretion", "The restaurant may levy Service charge/Entry fees as per its discretion", "The discount may not be applicable on Combos, Meal, Beverages, MRP Products, Beer Buckets, Bottled Drinks, Hookah/Seesha, Discounted platters/Thalis, Buffets, as per Catch items and special menus' as per the restaurant's discretion.", "Any items ordered that are not included in the offer will be billed separately.", "Menu prices and items may change without prior notice.", "Weekend and weekdays offer might differ as per restaurant’s discretion."],
                "offerType": "OFFER_TYPE_V2_REGULAR",
                "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                "offersLogoV2": [{
                    "logo": "dineout/rx-card/OFFER.png",
                    "type": "LOGO_TYPE_RX_TILE"
                }, {
                    "logo": "dineout/search/as/Offers.png",
                    "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                }, {
                    "type": "LOGO_TYPE_PAY_BILL"
                }],
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 25
                }
            },
            "infos": [{
                "description": "Up to 10% off with HDFC Bank Credit Card",
                "otherLogoContext": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                },
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 15
                }
            }],
            "offerCount": 1,
            "offerHighlights": [{
                "logoCtx": {
                    "text": "Table booking",
                    "logo": "dineout/rx-card/highlights/book.png"
                }
            }]
        },
        "customerOffer": {
            "info": {
                "description": "+ Up to 10% bank offers",
                "otherLogoContext": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                },
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 15
                }
            },
            "loyaltyInfo": {
                "cta": {},
                "offerDetail": {
                    "type": "FLAT",
                    "title": "₹150 Off",
                    "subtitle": "above ₹1500",
                    "description": " ₹150 off",
                    "logoContext": {
                        "text": "with",
                        "logo": "ONE"
                    },
                    "coupon": {
                        "availableCouponCount": 2
                    },
                    "otherLogoContext": {
                        "logo": "OFFER_LOGO"
                    },
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_FLAT",
                        "discountValue": 150
                    }
                },
                "oneBenefit": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png"
                }
            },
            "otherOffersInfo": [{
                "header": "ADDITIONAL OFFERS",
                "type": "CASHBACK",
                "title": "10%*",
                "description": "10% cashback",
                "logoContext": {},
                "tnc": ["Valid only on Swiggy HDFC Bank Credit Card", "Applicable on a minimum net transaction value of ₹100", "Monthly cashback limit of ₹1500 on Swiggy spends", "Cashback will be processed in the next statement cycle", "Other T&Cs may apply"],
                "coupon": {},
                "adjoiningSubtext": "Above ₹100",
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 10
                }
            }],
            "infos": [{
                "description": "Up to 10% off with bank offers",
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 15
                }
            }],
            "offerCount": 1
        },
        "isPaymentAccepted": true,
        "offerInfoV3": {
            "offerLogo": {
                "logo": "dineout/rx-card/OFFER.png"
            },
            "vendorOffer": {
                "title": "Flat 25% off",
                "subtitle": "on walk-in",
                "subtext": "+ 1 more",
                "style": {
                    "textColour": "text_color_highest_emphasis_inverse",
                    "bgColour": "positive"
                },
                "subtextStyle": {}
            }
        },
        "mediaStyle": {
            "aspectRatio": 1.7778
        },
        "vendorHighlights": [{
            "logo": {
                "logo": "dineout/rx-card/highlights/book.png"
            },
            "title": "Table booking",
            "style": {
                "textColour": "text_color_med_emphasis",
                "bgColour": "background_button_tertiary_low"
            }
        }]
    },
    "cta": {
        "link": "https://www.swiggy.com/restaurants/21552/dineout",
        "text": "DINERSONE_REST_DETAIL",
        "type": "DEEPLINK"
    }
}, {
    "info": {
        "id": "637714",
        "name": "Sandoz BBQ",
        "rating": {
            "value": "4.3",
            "count": 1658,
            "countDescription": "1K+ Google ratings"
        },
        "costForTwo": "₹2100 for two",
        "cuisines": ["North Indian", "Chinese"],
        "locality": "Janakpuri",
        "mediaFiles": [{
            "type": "IMAGE",
            "id": "2022-11-11T09:50:04.529",
            "url": "v1668160206/zr5su7gvdbkalzigzzmr.webp"
        }],
        "highlights": ["Parking available", "SwiggyPay accepted"],
        "locationInfo": {
            "distanceString": "9.2 km",
            "city": {
                "name": "Delhi"
            },
            "formattedAddress": "Janakpuri, Delhi"
        },
        "offerInfoV2": {
            "customerOffer": {
                "header": "Up to 10% off with HDFC Bank Credit Card",
                "otherOfferLogo": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                }
            }
        },
        "vendorOffer": {
            "infos": [{
                "description": "Up to 10% off with HDFC Bank Credit Card",
                "otherLogoContext": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                },
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 15
                }
            }],
            "offerHighlights": [{
                "logoCtx": {
                    "text": "Table booking",
                    "logo": "dineout/rx-card/highlights/book.png"
                }
            }]
        },
        "customerOffer": {
            "info": {
                "description": "+ Up to 10% bank offers",
                "otherLogoContext": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                },
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 15
                }
            },
            "loyaltyInfo": {
                "cta": {},
                "offerDetail": {
                    "type": "FLAT",
                    "title": "₹150 Off",
                    "subtitle": "above ₹1500",
                    "description": " ₹150 off",
                    "logoContext": {
                        "text": "with",
                        "logo": "ONE"
                    },
                    "coupon": {
                        "availableCouponCount": 2
                    },
                    "otherLogoContext": {
                        "logo": "OFFER_LOGO"
                    },
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_FLAT",
                        "discountValue": 150
                    }
                },
                "oneBenefit": {
                    "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png"
                }
            },
            "otherOffersInfo": [{
                "header": "ADDITIONAL OFFERS",
                "type": "CASHBACK",
                "title": "10%*",
                "description": "10% cashback",
                "logoContext": {},
                "tnc": ["Valid only on Swiggy HDFC Bank Credit Card", "Applicable on a minimum net transaction value of ₹100", "Monthly cashback limit of ₹1500 on Swiggy spends", "Cashback will be processed in the next statement cycle", "Other T&Cs may apply"],
                "coupon": {},
                "adjoiningSubtext": "Above ₹100",
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 10
                }
            }],
            "infos": [{
                "description": "Up to 10% off with bank offers",
                "discountInfo": {
                    "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                    "discountValue": 15
                }
            }],
            "offerCount": 1
        },
        "isPaymentAccepted": true,
        "promoted": true,
        "adTrackingId": "cid=f70c65df-bbe1-4443-991e-98a7e0181864~~adtrid=3838b572-d15e-4daa-8f41-215cabb364cb~~adgrpid=f70c65df-bbe1-4443-991e-98a7e0181864#ag1~~cndid=637714~~bp=g0p/WaL6rtBRevD5tge2/HirPkYT6j0jXxLMUWR9dVVBmgaXi+sG7r9OiQr3pIjRol4TZ1Q/68efyllJKSHDDvHvdf/H~~mp=SWIGGY_IN~~bl=DINEOUT~~st=~~srvts=1740137352764~~plid=6063bb22-c5fd-4da9-ad5a-97d86b61ddf4~~zoneid=218~~kw=~~lmd=8229.101~~collid=116084",
        "offerInfoV3": {
            "paymentOffer": {
                "title": "Up to 10% off with bank offers",
                "style": {
                    "textColour": "positive",
                    "bgColour": "color_positive_sub"
                },
                "subtextStyle": {}
            }
        },
        "mediaStyle": {
            "aspectRatio": 1.7778
        },
        "vendorHighlights": [{
            "logo": {
                "logo": "dineout/rx-card/highlights/book.png"
            },
            "title": "Table booking",
            "style": {
                "textColour": "text_color_med_emphasis",
                "bgColour": "background_button_tertiary_low"
            }
        }]
    },
    "cta": {
        "link": "https://www.swiggy.com/restaurants/637714/dineout",
        "text": "DINERSONE_REST_DETAIL",
        "type": "DEEPLINK"
    }
}]