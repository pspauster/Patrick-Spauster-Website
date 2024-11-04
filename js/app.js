
//Portfolio Carousel
//Initiate array with data

var portfolio = [
    {
        href: "/Docs/MyResume.pdf",
        image: "images/resume.jpg",
        title: "My CV",
        description: "Read about my professional experience. Current to October 2022",
    },
    {
        href: "dataviz.html",
        image: "images/featured/bubbles.png",
        title: "My Data Viz Gallery",
        description: "View some of my published and unpublished data visualizations",
    },
    {
        href: "https://furmancenter.org/neighborhoods",
        image: "images/ndps_2024.png",
        title: "Neighborhood Data Profiles",
        description: "Revamped NYC neighborhood data with new colors and interactive charts",
    },
    {
        href: "https://furmancenter.org/stateofthecity/view/the-use-of-housing-choice-vouchers-in-new-york-city",
        image: "images/2023socimage.jpg",
        title: "Voucher Use in NYC",
        description: "Developed interactive graphics and scrolling template for research report",
    },
    {
        href: "https://citylimits.org/nyc-shelter-count/",
        image: "images/CL-shelter-tracker.jpeg",
        title: "NYC Shelter Count",
        description: "An auto-updating tool tracking the people living in NYC shelters",
    },
    {
        href: "https://wp.nyu.edu/wagnerplanner/",
        image: "images/wp.jpg",
        title: "The Wagner Planner",
        description: "I edited the NYU Planning Journal from 2022-2023 Read our recent stories",
    },
    {
        href: "https://furmancenter.shinyapps.io/officehotelmap/",
        image: "images/featured/officehotel.JPG",
        title: "Office and Hotel Interactive Map",
        description: "Mapping opportunities to convert offices and hotels to housing ",
    },
    {
        href: "https://furmancenter.org/thestoop/entry/implications-and-geography-of-office-to-housing-conversions",
        image: "images/offices.jpg",
        title: "Stoop Blog Post: Office Conversions",
        description: "Implications and Geography of Office to Housing Conversions",
    },   
    {
        href: "https://www.urban.org/research/publication/rise-market-reliant-affordable-housing-tools",
        image: "images/iz.png",
        title: "The Rise of Market-Reliant Affordable Housing Tools",
        description: "Housing trust funds are on the decline inclusionary zoning and zoning incentives are on the rise",
    },
    {
        href: "https://furmancenter.org/stateofthecity/view/the-geography-of-new-housing",
        image: "images/socmap.jfif",
        title: "The Geography of New Housing Development",
        description: "We estimate that at least 32 percent of all multi-family units completed were income-restricted",
    },
    {
        href: "https://www.urban.org/features/housing-first-breaks-homelessness-jail-cycle",
        image: "images/denver-sib-header-50.jpg",
        title: "Housing First Breaks the Homelessness-Jail Cycle",
        description: "Results from a life-changing 5 year supportive housing program",
    },
    {
        href: "https://reenvisioning-rural-america.urban.org/",
        image: "images/ruralfeature.jpg",
        title: "Reenvisioning Rural America",
        description: "Our data tool characterizes rural communities by their assets, not their deficiencies",
    },
    {
        href: "https://www.urban.org/research/publication/protecting-housing-choice-voucher-holders-discrimination-lessons-oregon-and-texas",
        image: "images/vouchers-graph.png",
        title: "Voucher Protections",
        description: "Why Oregon chose to protect voucher holders and Texas turned them away"
    },
    {
        href: "https://www.urban.org/research/publication/state-and-local-voucher-protection-laws-introducing-new-legal-dataset",
        image: "images/vouchersmap-300x185.png",
        title: "Voucher Protection Laws",
        description: "Adding new data to the debate on voucher protections nationwide"
    },
    {
        href: "https://www.urban.org/research/publication/housing-and-land-use-implications-split-roll-property-tax-reform-california",
        image: "images/split-roll.jpg",
        title: "California's Split Roll Initiative",
        description: "Split Roll tax reform won't make housing worse in California"
    },
    {
        href: "https://www.urban.org/research/publication/breaking-homelessness-jail-cycle-housing-first-results-denver-supportive-housing-social-impact-bond-initiative",
        image: "images/denver-300x200.jpg",
        title: "Denver Supportive Housing RCT",
        description: "Evidence that supportive housing works",
    },
    {
        href: "https://www.urban.org/research/publication/investing-equitable-urban-park-systems",
        image: "images/parks-300x141.png",
        title: "Investing in Equitable Parks",
        description: "New strategies to build parks where they're most needed"
    },
    {
        href: "https://www.urban.org/research/publication/incorporating-two-generation-approaches-community-change",
        image: "images/gettyimages-594831019_crop-300x159.jpg",
        title: "2Gen Programs in Context",
        description: "What does it take to make real community change?"
    },
    {
        href: "https://www.urban.org/research/publication/promise-heights-response-challenges-created-covid-19",
        image: "images/PHPN.JPG", 
        title: "Promise Heights Promise Neighborhood",
        description: "How did service providers respond to COVID-19?"
    },
    {
        href: "https://www.urban.org/research/publication/developing-two-generation-approaches-communities",
        image: "images/FCCCcities.JPG",
        title: "2Gen Community Change", 
        description: "7 years of research in San Antonio, Columbus, and Buffalo"
    },
    {
        href: "https://www.neighborworks.org/NFMCCapstoneReport",
        image: "images/housing-crisis_0.jpg",
        title: "National Foreclosure Crisis",
        description: "How the nation's biggest foreclosure mitigation program got it done"
    },
    {
        href: "https://www.urban.org/research/publication/evaluation-resident-opportunity-and-self-sufficiency-service-coordinator-program",
        image: "images/ross.JPG", 
        title: "Service Coordinator Evaluation",
        description: "Our report to HUD on a new service model for Public Housing Authorities"
    },
    {
        href: "https://eua2018.protectingeducation.org/#attacks-on-schools",
        image: "images/eua18gcpea-300x164.jpg",
        title: "Education Under Attack",
        description: "I wrote 9 country profiles when I worked at HRW"
    },
    {
        href: "https://www.hrw.org/news/2016/09/20/human-rights-watch-submission-cedaw-committee",
        image: "images/HRW.png",
        title: "Women's Rights in Bangladesh",
        description: "I wrote the 2018 treaty body submission to the UN from HRW"
    },
    {
        href: "http://patrickspauster.com/wp-content/uploads/2017/10/CT-Economy-Srivastava.pdf",
        image: "images/ct-graphic-300x300.png",
        title: "The Connecticut Economy",
        description: "I contributed researh to the economic report"
    },
    {
        href: "/Docs/Spauster_Capstone_PublicPolicy.pdf",
        image: "images/propera_oportunidades_sedesol2_red-150x150.jpg",
        title: "Undergraduate Capstone",
        description: "Comparing approaches to Conditional Cash Transfer Programs in Mexico and Brazil"
    }
]

//Writing Carousel
//Initiate array with data
var writing = [
    {
        href: "https://citylimits.org/2024/11/04/in-early-weeks-new-online-notice-of-eviction-rule-for-city-marshals-is-inconsistently-enforced/",
        image: "images/Annotated-Eviciton-Notice-final.jpg",
        title: "Marshals Fail to Follow New Notice Rule",
        description: "Housing violations jumped 24%, frustrating tenants with persistent issues",
    },
    {
        href: "https://citylimits.org/2024/10/16/housing-violations-in-nyc-jumped-24-this-year-we-mapped-them-by-neighborhood/",
        image: "images/featured/violations.jpeg",
        title: "Housing Code Violations Are Up. We Mapped Them",
        description: "Housing violations jumped 24%, frustrating tenants with persistent issues",
    },
    {
        href: "https://citylimits.org/2024/08/26/spiking-evictions-renew-calls-to-reform-nyc-marshals-system/",
        image: "images/marshal.jpg",
        title: "Marshals Make Record Revenue as Evictions Spike",
        description: "Investigating the role of the private city marshal in evictions",
    },
    {
        href: "https://citylimits.org/2024/10/02/city-must-keep-funding-mainchance-homeless-drop-in-center-court-rules/",
        image: "images/mainchance-client.jpg",
        title: "Mainchance Must Stay Open",
        description: "State judge rules that the city terminated the homeless center’s contract arbitrarily",
    },
    {
        href: "https://www.bloomberg.com/news/features/2024-06-25/missoula-passes-homeless-encampment-law-on-eve-of-supreme-court-ruling?srnd=homepage-americas",
        image: "images/missoula.jpg",
        title: "Missoula Passes Camping Restrictions",
        description: "Cities struggle to manage homeless camping as Supreme Court rules on the issue",
    },
    {
        href: "https://citylimits.org/2024/06/18/homeless-drop-in-center-mainchance-gets-fresh-chance-to-fight-closure/",
        image: "images/Brady.jpeg",
        title: "Mainchance Gets Another Chance",
        description: "Judge says city must fund homeless drop-in whele they sue city to stay open.",
    },
    {
        href: "https://citylimits.org/2024/05/16/midtown-homeless-drop-in-center-may-be-among-city-budget-casualties/",
        image: "images/Mainchance.jpeg",
        title: "City Closing Midtown Homeless Drop-in Center",
        description: "Budget cuts to close a longtime homeless services center called Mainchance.",
    },
    {
        href: "https://citylimits.org/2024/05/14/exit-unknown-where-do-people-go-after-leaving-nyc-homeless-shelters/",
        image: "images/StarliteHarris.jpeg",
        title: "Exit Unknown: Homeless New Yorkers Rarely Find Housing",
        description: "Amid a steep rise in people living in shelter, few are exiting the system",
    },
    {
        href: "https://citylimits.org/2024/04/17/good-cause-negotiations-raise-tricky-question-whats-in-a-portfolio/",
        image: "images/featured/portfolio-exemption.jpeg",
        title: "'Good Cause' Exemption Leaves out Half Million Renters",
        description: "How many apartments does your landlord own? Good luck finding out",
    },
    {
        href: "https://nyc.streetsblog.org/2024/03/26/safety-last-dot-added-no-new-protected-bike-lanes-in-four-priority-districts",
        image: "images/sharrow.jpeg",
        title: "No Bike Routes in Priority Districts",
        description: "4 Brooklyn Neighborhoods saw no new routes",
    },
    {
        href: "https://citylimits.org/2024/01/29/why-are-you-making-it-so-difficult-nyc-cash-aid-applicants-face-denial-surge/",
        image: "images/ca_sign.jpeg",
        title: "Cash Aid Denials Surge",
        description: "Bureacratic hurdles are keeping low income folks from benefits",
    },
    {
        href: "https://citylimits.org/2023/12/07/tracking-nycs-record-high-homeless-shelter-population/",
        image: "images/CL-shelter-story.jpeg",
        title: "140K People Live In NYC Shelters",
        description: "Tracking the NYC shelter population amid record homelessness",
    },
    {
        href: "https://citylimits.org/2023/09/11/a-real-estate-trust-bought-dozens-of-brooklyn-brownstones-now-it-wants-out/",
        image: "images/CityLimitsRealEstateTrust.jpeg",
        title: "A REIT Bought Brooklyn Brownstones. Now it Wants Out",
        description: "A trust targeted gentrifying Brooklyn - now tenants are left holding the bag",
    },
    {
        href: "https://www.bloomberg.com/news/newsletters/2023-08-30/citylab-maplab-reforming-zoning-codes-with-data?cmpid=BBD083023_MAPLAB&utm_medium=email&utm_source=newsletter&utm_term=230830&utm_campaign=maplab#xj4y7vzkg",
        image: "images/zoning-atlas.png",
        title: "The Zoning Data Revolution is Here",
        description: "New datasets are shining a light on the opaque laws that dictate the way we live.",
    },
    {
        href: "https://chi.streetsblog.org/2023/08/25/chicagos-e-scooter-program-is-zooming-ahead-but-equity-gaps-remain",
        image: "images/scooter-roll.jpeg",
        title: "Equity Remains Elusive for Chicago's E-Scooter Program",
        description: "Ridership lags in the city’s Black and Brown neighborhoods",
    },
    {
        href: "https://nyc.streetsblog.org/2023/06/08/map-quest-see-exactly-why-sammys-law-would-be-so-crucial-for-the-boroughs",
        image: "images/speeding-car-with-map3.png",
        title: "See Exactly Why Sammy’s Law Would Be So Crucial for the Boroughs",
        description: "Mapping the city's most dangerous 25mph streets with Streetsblog",
    },
    {
        href: "https://www.bloomberg.com/news/newsletters/2023-04-20/maplab-tracking-spring-cherry-blossoms",
        image: "images/cherry.jpg",
        title: "Tracking Spring Cherry Blossoms",
        description: "MapLab: How to make the most out of peak cherry blossom bloom.",
    },
    {
        href: "https://www.bloomberg.com/news/features/2023-04-03/jersey-city-is-reimagining-public-housing-redevelopment",
        image: "images/jc-rendering.jpeg",
        title: "Jersey City Is Reimagining Public Housing Redevelopment",
        description: "A mixed-income development aims to update aging public housing.",
    },
    {
        href: "https://www.bloomberg.com/news/articles/2023-02-02/how-gainesville-s-yimby-zoning-reform-was-undone",
        image: "images/gainesville4.jpg",
        title: "How Backlash Reversed a Florida City’s Zoning Reforms",
        description: "The swift about-face shows that pro-housing advocates still face tough local battles.",
    },
    {
        href: "https://www.bloomberg.com/news/articles/2022-10-13/florida-fights-gainesville-s-bid-to-end-single-family-zoning",
        image: "images/gainesville3.jpg",
        title: "Florida Republicans Are Fighting Zoning Reform",
        description: "The state government is pushing back against Gainesville's effort to eliminate single-family zoning.",
    },
    {
        href: "https://www.bloomberg.com/news/articles/2022-08-30/the-bitter-fight-for-unions-at-starbucks-one-year-later",
        image: "images/sbux.jpg",
        title: "The Bitter Fight For Unions at Starbucks, One Year Later",
        description: "A spring surge in union activity at Starbucks stores has tapered off",
    },
    {
        href: "https://www.bloomberg.com/news/articles/2022-08-09/gainesville-florida-moves-to-end-single-family-zoning",
        image: "images/gainesville2.jpg",
        title: "Gainesville, Florida, Moves to End Single-Family Zoning",
        description: "The city commission recently voted to go ahead with the changes, despite vocal opposition",
    },
    {
        href: "https://www.bloomberg.com/news/articles/2022-07-28/a-college-town-takes-on-exclusionary-zoning",
        image: "images/gainesville.jpg",
        title: "A College Town Takes On Exclusionary Zoning",
        description: "Gainesville, Florida, could be on the verge of eliminating single-family housing requirements",
    },
    {
        href: "https://www.bloomberg.com/news/articles/2022-07-01/are-there-better-options-than-gas-tax-holidays",
        image: "images/gastax.jpg",
        title: "Cities Seek Alternatives to Gas Tax Holidays",
        description: "Policymakers looking to relieve high transportation costs have other options.",
    },
    {
        href: "https://wp.nyu.edu/wagnerplanner/2022/02/10/shabazz-stuart-and-oonee-do-business-like-urban-planners/",
        image: "images/oonee.jpeg",
        title: "Shabazz Stuart and Oonee Do Business Like Urban Planners",
        description: "Oonee, like its founders, straddles the line between business and policy.",
    },
    {
        href: "https://wp.nyu.edu/wagnerplanner/2022/01/27/will-winter-freeze-out-nycs-open-streets-program/",
        image: "images/featured/activestreets.png",
        title: "Will Winter Freeze Out NYC's Open Streets Program?",
        description: "The program's complicated rollout, fate this winter, and long term outlook",
    },
    {
        href: "https://wp.nyu.edu/wagnerplanner/2021/11/09/ingrid-gould-ellen-reflects/",
        image: "images/Ingrid2019.jpg",
        title: "Profile of Ingrid Gould Ellen",
        description: "On a Successful Career, NYC, Social Media, and the Next Generation Working on Housing Policy",
    },
    {
        href: "https://citylimits.org/2021/09/30/opinion-new-york-city-needs-basement-apartments-now-more-than-ever/",
        image: "images/Ida.jpg",
        title: "NYC Needs Basement Apartments",
        description: "After Ida, we need to legalize basement apartments",
    },
    {
        href: "https://www.urban.org/urban-wire/lebron-jamess-i-promise-school-puts-public-face-evidence-based-approach-whole-family-intervention",
        image: "images/lebron_header-300x140.jpg",
        title: "Lebron's school helps the whole family",
        description: "Lebron's foundation uses the evidence at the I Promise School",
    },
    {
        href: "https://www.urban.org/urban-wire/lebron-jamess-foundation-building-transitional-housing-i-promise-school-it-can-go-further-help-families",
        image: "images/gettyimages-1007909642_crop-300x140.jpg",
        title: "Lebron is Building Transitional Housing",
        description: "But his foundation can do more to help families",
    },
    {
        href: "https://www.urban.org/urban-wire/some-new-york-city-districts-nearly-one-four-students-experience-homelessness",
        image: "images/nycsd_homelessness-01.png",
        title: "1 in 10 NYPS students experience homelessness",
        description: "In some neighborhoods as many as 1 in 4",
    },
    {
        href: "https://www.urban.org/urban-wire/proposition-15-wont-worsen-californias-housing-crisis",
        image: "images/split-roll_1-768x356.jpg",
        title: "Split Roll in California",
        description: "Split Roll tax reform won't make housing worse in California",
    },
    {
        href: "https://urban-institute.medium.com/three-things-we-learned-from-cleaning-one-million-dmv-property-records-4c6fd6ed84fa",
        image: "images/1_6xAkih_w7mz3Z_hwHOQCDg-268x300.png",
        title: "Data@Urban Blog",
        description: "How we used property and zoning data to create housing solutions for the DMV",
    },
    {
        href: "https://www.urban.org/urban-wire/suburbs-arent-under-attack-they-can-be-places-opportunity-all",
        image: "images/suburbs-768x256.jpg",
        title: "The Suburbs Aren't Under Attack",
        description: "What the evidence says about Trump's claim",
    },
    {
        href: "https://www.urban.org/urban-wire/tackling-systemic-barriers-northeast-buffalo-help-break-cycles-poverty",
        image: "images/gettyimages-594831019_crop-300x159.jpg",
        title: "Barriers in Northeast Buffalo",
        description: "Urban Wire blog: families in Buffalo face barriers to oppportunity",
    },
    {
        href: "/Docs/HardPart.pdf",
        image: "images/IMG_9010-150x150.jpg",
        title: "Hard Part",
        description: "A piece about change",
    },
    {
        href: "/Docs/BytheSea.pdf",
        image: "images/IMG_1995-150x150.jpg",
        title: "By the Sea",
        description: "My piece in Davidson's literary magazine, 'Hobart Park'"
    },
    {
        href: "/Docs/UltimateMoment.pdf",
        image: "images/frisbee.jpg",
        title: "The Ultimate Moment",
        description: "On Ultimate Frisbee"
    },
]

//set up meta array
var siteData = 
    {
    "portfolio": portfolio,
    "writing": writing,
}


$(document).ready(function()  {

    $(".content").hide()

    function initializeCarousel (clickedId) {
        var sliderInitialized = $(".carousel-"+clickedId).data("initialized");
        console.log(sliderInitialized)
        // getAllCards(clickedId);
        if (sliderInitialized == "FALSE") {
            //if its portfolio or writing
            if(clickedId == "portfolio" | clickedId == "writing") {
                console.log("clicked id == porfolio or writing")
                $('.carousel-'+clickedId).slick({
                    slidesPerRow: 3,
                    slidesToScroll: 1,
                    rows: 2,
                    dots: true,
                    arrows: false,
                    responsive: [
                        {
                        breakpoint: 750,
                        settings: {
                            slidesPerRow: 1,
                            rows: 2,
                            slidesToShow: 1,
                        }
                        }
                    ]
                });
                console.log("initialized carousel");
                $(".carousel-"+clickedId).data("initialized", "TRUE");
                setHeight();
            }
            //if its patrick
            if(clickedId == "patrick") {
                console.log("clicked id == patrick")
                $('.carousel-patrick').slick({
                    slidesPerRow: 1,
                    slidesToScroll: 1,
                    rows: 1,
                    dots: false,
                    arrows: true,
                    autoplay: true,
                    autoplaySpeed: 5000,
                });
                console.log("initialized carousel");
                $(".carousel-"+clickedId).data("initialized", "TRUE");
            }
        } 
    };

    function setHeight() {
        var h = 0;
        $('.thumbnail').each(function() {
            if ($(this).height() > h) {
                h = $(this).height();
            }
        });
        $('.thumbnail').each(function() {
            $(this).height(h);
        });
    }


    function reset () {
        firstClick = ""
        secondClick = "" 
        console.log("reset")
    };

    function openSection (clickedId) {
        $("#"+clickedId+"-content").show()
        //show content with matching id
        $(".row").addClass("row-shrunk")
        //shrink all main rows
        //if portfolio or writing
        initializeCarousel(clickedId)
        //if patrick

        //initialize carousel
        console.log("opened "+clickedId)
        //initialize slick here
    };

    function closeSection (clickedId) {
        //hide content with matching id
        // unInitializeCarousel(clickedId);
        $(".content").hide();
        $(".row").removeClass("row-shrunk")
        console.log("closed "+clickedId)
    };

    reset();

    $(".row").on("click", function() {
        if (firstClick == "") { //open the clicked section
            firstClick = $(this).attr("id");
            openSection(firstClick);
        }
        else if (firstClick != "") { //if a section is open
            secondClick = $(this).attr("id"); //grab value for section clicked
            if (firstClick == secondClick) { //if click the open section, reset to main page
                closeSection(firstClick);
                reset();
            }
            else if(firstClick != secondClick) { //if click a different section, close the open section and open a new section
                closeSection(firstClick);
                openSection(secondClick);
                firstClick = secondClick;
                secondClick = ""
            }
        }
    });

    //Get all cards function
    // pass it an argument for portfolio or writing array
    // Step 1: Iterate through array (forEach)
    // Step 2: For each object create a HTML card with their data inside
    // Step 3: Append the newly-created HTML to the DOM (.append)
    function getAllCards(carouselName) {
        // Step 1: Iterate through students array (forEach)
        // Step 2: For each student object create a HTML card with their data inside
        // Step 3: Append the newly-created HTML to the DOM (.append)
        console.log("Called getallcards function for " + carouselName)
        siteData[carouselName].forEach(function(e, i) {
          var cardHtml = `
          <div class="thumbnail">
            <a class = "thumbnail-pic" href="${siteData[carouselName][i].href}" target="_blank" style="background-image:url(${siteData[carouselName][i].image})">
            </a>
            <div >
                <h2>${siteData[carouselName][i].title}</h2>
                    <p>${siteData[carouselName][i].description}</p>
            </div>
          </div>
          `;
          // Add newly-created HTML to the DOM
          $(".carousel-"+carouselName).append(cardHtml);
          console.log("Added card to DOM");
        });
      };
    //call function for Portfolio
    //run function for writing
    getAllCards("portfolio")
    getAllCards("writing")




});
