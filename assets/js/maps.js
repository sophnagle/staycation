function initMap() {

        let map = new google.maps.Map(document.getElementById("map"), {
        /* Initiates the map */
            zoom: 8,
            center: {
                lat: 51.7094,
                lng: -4.6998
            }
        /* Focus on West Wales */
        });

        for (let i = 0; i < locations.length; i++) {
            /* Iterates through location array */ 
            const infoWindow = new google.maps.InfoWindow({
                content: `<h4 class="cardWindow card-text">` + locations[i].title + `</h4>` + `<a href="` + 
                            locations[i].url + `"` + ` target="_blank">`+ `<div class="card">` + `<img class="card-img-top" src="` + 
                                locations[i].image + `"` + `alt="Location">` + `</div>` + `</a>`,
            /* Creates infoWindow with content image, title and link */
            });

            const marker = new google.maps.Marker({
                /* Creates map marker for each location taken details from its array */
                position: locations[i].position,
                /* Adds animation to map marker as page loads */
                animation: google.maps.Animation.DROP,
                map: map,
            });

            marker.addListener("click", () => {
            /* On click infoWindow appears */
                infoWindow.open(map, marker);
            });

        }

}


function showAmenity(sel) {

    /* Takes the value from the Dropdown menu that user selects */
    var value = sel.value;

    let map = new google.maps.Map(document.getElementById("map"), {
            zoom: 8,
            center: {
                lat: 51.7094,
                lng: -4.6998
            }
        });

        if (value == "pubs") {
            /* if fuction iterates through location/amenity array depending on the value of user selection*/ 

                for (let i = 0; i < pubs.length; i++) {

                    const infoWindow = new google.maps.InfoWindow({
                    content: `<h4 class="cardWindow card-text">` + pubs[i].title + `</h4>` + `<a href="` + 
                            pubs[i].url + `"` + ` target="_blank">`+ `<div class="card">` + `<img class="card-img-top" src="` + 
                                pubs[i].image + `"` + `alt="Location">` + `</div>` + `</a>`,
                    });

                    const marker = new google.maps.Marker({
                        position: pubs[i].position,
                        animation: google.maps.Animation.DROP,
                        map: map,
                    });
                    
                    marker.addListener("click", () => {
                        infoWindow.open(map, marker);
                    });
                }
    } else if (value == "beach") {

                for (let i = 0; i < beach.length; i++) {

                    const infoWindow = new google.maps.InfoWindow({
                        content: `<h4 class="cardWindow card-text">` + beach[i].title + `</h4>` + `<a href="` + 
                            beach[i].url + `"` + ` target="_blank">`+ `<div class="card">` + `<img class="card-img-top" src="` + 
                                beach[i].image + `"` + `alt="Location">` + `</div>` + `</a>`,
                    });

                    const marker = new google.maps.Marker({
                        position: beach[i].position,
                        animation: google.maps.Animation.DROP,
                        map: map,
                    });
                    
                    marker.addListener("click", () => {
                        infoWindow.open(map, marker);
                    });
                }
                
            }  else if (value == "restaurants") {

                for (let i = 0; i < restaurants.length; i++) {
                    const infoWindow = new google.maps.InfoWindow({
                    content: `<h4 class="cardWindow card-text">` + restaurants[i].title + `</h4>` + `<a href="` + 
                            restaurants[i].url + `"` + ` target="_blank">`+ `<div class="card">` + `<img class="card-img-top" src="` + 
                                restaurants[i].image + `"` + `alt="Location">` + `</div>` + `</a>`,
                    });

                    const marker = new google.maps.Marker({
                        position: restaurants[i].position,
                        animation: google.maps.Animation.DROP,
                        map: map,
                    });
                    
                    marker.addListener("click", () => {
                        infoWindow.open(map, marker);
                    });

                }
            }

            else if (value == "walks") {

                for (let i = 0; i < walks.length; i++) {
                    const infoWindow = new google.maps.InfoWindow({
                        content: `<h4 class="cardWindow card-text">` + walks[i].title + `</h4>` + `<a href="` + 
                                    walks[i].url + `"` + ` target="_blank">`+ `<div class="card">` + `<img class="card-img-top" src="` + 
                                        walks[i].image + `"` + `alt="Location">` + `</div>` + `</a>`,
                        });

                        const marker = new google.maps.Marker({
                            position: walks[i].position,
                            animation: google.maps.Animation.DROP,
                            map: map,
                        });
                        
                        marker.addListener("click", () => {
                            infoWindow.open(map, marker);
                        });

                 }

            } else if (value == "family") {

                for (let i = 0; i < family.length; i++) {
                    const infoWindow = new google.maps.InfoWindow({
                        content: `<h4 class="cardWindow card-text">` + family[i].title + `</h4>` + `<a href="` + 
                            family[i].url + `"` + ` target="_blank">`+ `<div class="card">` + `<img class="card-img-top" src="` + 
                                family[i].image + `"` + `alt="Location">` + `</div>` + `</a>`,
                        });

                        const marker = new google.maps.Marker({
                            position: family[i].position,
                            animation: google.maps.Animation.DROP,
                            map: map,
                        });
                        
                        marker.addListener("click", () => {
                            infoWindow.open(map, marker);
                        });

                }  

            } else {

                for (let i = 0; i < locations.length; i++) {
                        const infoWindow = new google.maps.InfoWindow({
                            content: `<h4 class="cardWindow card-text">` + locations[i].title + `</h4>` + `<a href="` + 
                                        locations[i].url + `"` + ` target="_blank">`+ `<div class="card">` + `<img class="card-img-top" src="` + 
                                            locations[i].image + `"` + `alt="Location">` + `</div>` + `</a>`,
                        });

                        const marker = new google.maps.Marker({
                            position: locations[i].position,
                            animation: google.maps.Animation.DROP,
                            map: map,
                        });

                        marker.addListener("click", () => {
                            infoWindow.open(map, marker);
                        });

        }

    }             
}      





const locations = [
    
    {
        title: "Fforest Farm",
        position: {
            lat: 52.06227,
            lng: -4.645963
        },
        map: map,
        image: "assets/images/fforestfarm.jpg",
        url: "https://www.coldatnight.co.uk/fforest-farm/",
    },

    {
        title: "Cwtch",
        position: {
            lat: 51.7238,
            lng: -4.6843
        },
        map: map,
        image: "assets/images/cwtch.jpg",
        url: "https://westwalesholidaycottages.co.uk/cwtch",
    },

    {
        title: "The Coach House",
        position: {
            lat: 51.674232,
            lng: -4.704632
        },
        map: map,
        image: "assets/images/thecoachhouse.jpg",
        url: "https://www.fbmholidays.co.uk/cottages/tenby/the-coach-house",
    },

    {
        title: "Griffithston Farm",
        position: {
            lat: 51.7089,
            lng: -4.7166
        },
        map: map,
        image: "assets/images/griffithston.jpg",
        url: "https://www.ukcampsite.co.uk/sites/details.asp?revid=7804",
    },

    {
        title: "One Cat Farm",
        position: {
            lat: 52.205256,
            lng: -4.210921
        },
        map: map,
        image: "assets/images/onecatfarm.jpg",
        url: "https://www.onecatfarm.com/booking-prices-availability/the-hide/",
    },

    {
        title: "Fron Haul",
        position: {
            lat: 52.544064,
            lng: -4.0468307
        },
        map: map,
        image: "assets/images/fronhaul.jpg",
        url: "https://westwalesholidaycottages.co.uk/fron-haul",
    },

    {
        title: "Rhosgadw Farm Campsite",
        position: {
            lat: 51.900259,
            lng: -5.260356
        },
        map: map,
        image: "assets/images/rhosgadw.jpg",
        url: "http://www.campingstdavids.co.uk/",
    }


];

const pubs = [

    {
        title: "The Jolly Sailor",
        position: {
            lat: 51.7065,
            lng: -4.9214
        },
        map: map,
        image: "assets/images/thejollysailor.jpg",
        url: "https://www.jollysailorburton.co.uk/",
    },

    {
        title: "The Black Lion",
        position: {
            lat: 51.7972,
            lng: -4.0669
        },
        map: map,
        image: "assets/images/theblacklion.JPG",
        url: "https://blion.co.uk/",
    },

    {
        title: "Ffostrasol Arms",
        position: {
            lat: 52.1028,
            lng: -4.3772
        },
        map: map,
        image: "assets/images/ffostrasolarms.jpg",
        url: "https://ffostrasolarms.co.uk/",
    },

    {
        title: "The Griffin",
        position: {
            lat: 53.1241,
            lng: -4.2804
        },
        map: map,
        image: "assets/images/thegriffin.jpg",
        url: "https://www.griffininndale.co.uk/",
    },

    {
        title: "The Old Chemist Inn",
        position: {
            lat: 51.7095,
            lng: -4.7022
        },
        map: map,
        image: "assets/images/theoldchemistinn.jpg",
        url: "https://www.tripadvisor.co.uk/Restaurant_Review-g191268-d1395495-Reviews-The_Old_Chemist_Inn-Saundersfoot_Pembrokeshire_Wales.html",
    },

    {
        title: "The Captains Table",
        position: {
            lat: 51.7095,
            lng: -4.4682
        },
        map: map,
        image: "assets/images/thecaptainstable.jpg",
        url: "https://thecaptainstable.co.uk/index.html",
    },

    {
        title: "Hope and Anchor",
        position: {
            lat: 50.4020,
            lng: -4.41502
        },
        map: map,
        image: "assets/images/hopeandanchor.jpg",
        url: "https://www.thehopeandanchorpub.co.ukhttps://www.tripadvisor.co.uk/Restaurant_Review-g191253-d1529378-Reviews-Hope_Anchor-Tenby_Pembrokeshire_Wales.html",
    },

];

const restaurants = [

    {
        title: "Blue Ball Restaurant",
        position: {
            lat: 51.6721,
            lng: -4.7012
        },
        map: map,
        image: "assets/images/blueball.jpg",
        url: "https://www.blueballtenby.com/",
    },

    {
        title: "Coast",
        position: {
            lat: 51.71771,
            lng: -4.6954
        },
        map: map,
        image: "assets/images/coast.jpg",
        url: "https://coastsaundersfoot.co.uk/",
    },

    {
        title: "Ultracomida",
        position: {
            lat: 51.79891,
            lng: -4.74347
        },
        map: map,
        image: "assets/images/ultracomida.jpg",
        url: "https://www.ultracomida.co.uk/page/venues/narberth",
    },

    {
        title: "The Canteen",
        position: {
            lat: 52.0189,
            lng: -4.8327
        },
        map: map,
        image: "assets/images/thecanteen.jpg",
        url: "https://www.thecanteennewport.com/",
    },

    {
        title: "The Mill",
        position: {
            lat: 51.9427,
            lng: -4.1470
        },
        map: map,
        image: "assets/images/themill.jpg",
        url: "https://www.tripadvisor.co.uk/Restaurant_Review-g552052-d4513699-Reviews-The_Mill-Trefin_St_Davids_Peninsula_Pembrokeshire_Wales.html",
    },
];

const beach = [

    {
        title: "Tenby",
        position: {
            lat: 51.402204,
            lng: -4.421609
        },
        map: map,
        image: "assets/images/tenby.jpg",
        url: "https://www.visitwales.com/destinations/west-wales/pembrokeshire/things-do-tenby",
    },

    {
        title: "Saundersfoot",
        position: {
            lat: 51.7095,
            lng: -4.7922
        },
        map: map,
        image: "assets/images/saundersfoot.jpg",
        url: "https://www.visitpembrokeshire.com/explore-pembrokeshire/beaches/saundersfoot",
    },

    {
        title: "Llangranog",
        position: {
            lat: 52.1063,
            lng: -4.4720
        },
        map: map,
        image: "assets/images/llangranog.jpg",
        url: "https://www.thebeachguide.co.uk/south-wales/ceredigion/llangrannog.htm",
    },

    {
        title: "Aberporth",
        position: {
            lat: 52.1346,
            lng: -4.5451
        },
        map: map,
        image: "assets/images/aberporth.jpg",
        url: "https://www.cardigan-bay.com/aberporth-beach-cardigan-bay/",
    },

    {
        title: "Tresaith",
        position: {
            lat: 52.1355,
            lng: -4.5177
        },
        map: map,
        image: "assets/images/tresaith.jpg",
        url: "https://www.cardigan-bay.com/tresaith-beach/",
    },

    {
        title: "Mwnt",
        position: {
            lat: 52.1360,
            lng: -4.6405
        },
        map: map,
        image: "assets/images/mwnt.jpg",
        url: "https://www.nationaltrust.org.uk/mwnt",
    },

];

const walks = [

    {
        title: "Caldy Island",
        position: {
            lat: 51.6347,
            lng: -4.6862
        },
        map: map,
        image: "assets/images/caldyisland.JPG",
        url: "https://www.countryfile.com/go-outdoors/walks/walk-caldey-island-pembrokeshire/",
    },

    {
        title: "Marloes Peninsula",
        position: {
            lat: 51.432747,
            lng: -5.1124
        },
        map: map,
        image: "assets/images/marloes.jpg",
        url: "https://www.countryfile.com/go-outdoors/walks/walk-marloes-peninsula-pembrokeshire/",
    },

    {
        title: "Dyffryn Fernant Garden",
        position: {
            lat: 51.9967,
            lng: -4.9296
        },
        map: map,
        image: "assets/images/dyffryn.JPG",
        url: "https://www.countryfile.com/go-outdoors/walks/walk-dyffryn-fernant-garden-pembrokeshire/",
    },

    {
        title: "Tenby",
        position: {
            lat: 51.6727,
            lng: -4.7036
        },
        map: map,
        image: "assets/images/tenby.jpg",
        url: "https://www.countryfile.com/go-outdoors/walks/walk-tenby-pembrokeshire/",
    },

];

const family = [

    {
        title: "Oakwood",
        position: {
            lat: 51.7775,
            lng: -4.8001
        },
        map: map,
        image: "assets/images/oakwood.jpg",
        url: "https://www.oakwoodthemepark.co.uk/",
    },

    {
        title: "Folly Farm",
        position: {
            lat: 51.7438,
            lng: -4.7328
        },
        map: map,
        image: "assets/images/follyfarm.jpg",
        url: "https://www.folly-farm.co.uk",
    },

    {
        title: "Danyrogof Caves",
        position: {
            lat: 51.8312,
            lng: -3.6870
        },
        map: map,
        image: "assets/images/danyrogof.jpg",
        url: "https://www.yha.org.uk/experience/national-showcaves-centre-wales",
    },

    {
        title: "Botanical Gardens",
        position: {
            lat: 51.5030,
            lng: -4.9000
        },
        map: map,
        image: "assets/images/botanical.jpg",
        url: "https://botanicgarden.wales/",
    },

    {
        title: "Dinosaur Park",
        position: {
            lat: 51.6837,
            lng: -4.7520
        },
        map: map,
        image: "assets/images/dinosaur.jpg",
        url: "https://www.thedinosaurpark.co.uk/",
    },

    {
        title: "Welsh Chocolate Farm",
        position: {
            lat: 51.8005,
            lng: -4.9713
        },
        map: map,
        image: "assets/images/chocolate.JPG",
        url: "https://www.wickedlywelsh.co.uk/",
    },
];

initMap();