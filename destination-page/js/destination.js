let parent = document.querySelector('.main')
let container = document.querySelector('.card-container')

//? Create all Element in destination page
function createElementDestination(allData){
    let card = document.createElement('div')
    card.setAttribute('class','card')
    container.appendChild(card)
    
    //! Create card header elements
    let cardHeader = document.createElement('div')
    cardHeader.setAttribute('class','card__header')
    card.appendChild(cardHeader)

    //! Create Card picture Elements
    let cardPicture = document.createElement('div')
    cardPicture.setAttribute('class','card__picture')
    cardHeader.appendChild(cardPicture)

    let cardPictureOverlay = document.createElement('div')
    cardPictureOverlay.setAttribute('class','card__picture-overlay')
    cardPictureOverlay.textContent = '&nbsp;'
    cardPicture.appendChild(cardPictureOverlay)

    let cardPictureImage = document.createElement('img')
    cardPictureImage.setAttribute('class','card__picture-img')
    cardPictureImage.src = src
    cardPicture.appendChild(cardPictureImage)//!End create card picture elements

    let headingTertirary = document.createElement('h3')
    headingTertirary.setAttribute('class','heading-tertirary')
    headingTertirary.textContent = hotel
    cardHeader.appendChild(headingTertirary)//! End card header elements
    
    //! Create card details elements
    let cardDetails = document.createElement('div')
    cardDetails.setAttribute('class','card__details')
    card.appendChild(cardDetails)

    let cardSubHeading = document.createElement('h4')
    headingTertirary.setAttribute('class','card__sub-heading')
    headingTertirary.textContent = subHeading
    cardDetails.appendChild(cardSubHeading)

    let cardText = document.createElement('p')
    headingTertirary.setAttribute('class','card__text')
    headingTertirary.textContent = cardTextDetails
    cardDetails.appendChild(cardText)

    //! Create card data elements
    let cardDataMap = document.createElement('div')
    cardDataMap.setAttribute('class','card__data')
    cardDetails.appendChild(cardData)

    let cardIconMap = document.createElement('svg')
    cardIconMap.setAttribute('class','card__icon')
    cardDataMap.appendChild(cardIconMap)

    let useMap = document.createElement('use')
    use.setAttribute('xlink:href' , 'img/icons.svg#icon-map-pin')
    cardIconMap.appendChild(useMap)

    let spanMap = document.createElement('span')
    spanMap.textContent = textCountrySpan
    cardDataMap.appendChild(spanMap)//! End card data

    //! Create card data elements
    let cardDataCalendar = document.createElement('div')
    cardDataCalendar.setAttribute('class','card__data')
    cardDetails.appendChild(cardDataCalendar)

    let cardIconCalender = document.createElement('svg')
    cardIconCalender.setAttribute('class','card__icon')
    cardDataCalendar.appendChild(cardIconCalender)

    let useCalender = document.createElement('use')
    useCalender.setAttribute('xlink:href' , 'img/icons.svg#icon-calendar')
    cardIconCalender.appendChild(useCalender)

    let spanCalender = document.createElement('span')
    spanCalender.textContent = textCalenderSpan
    cardDataCalendar.appendChild(spanCalender)//! End card data

    //! Create card data elements
    let cardDataFlag = document.createElement('div')
    cardDataFlag.setAttribute('class','card__data')
    cardDetails.appendChild(cardDataFlag)

    let cardIconFlag = document.createElement('svg')
    cardIconFlag.setAttribute('class','card__icon')
    cardDataFlag.appendChild(cardIconFlag)

    let useFlag = document.createElement('use')
    useFlag.setAttribute('xlink:href' ,'img/icons.svg#icon-flag')
    cardDataFlag.appendChild(useFlag)

    let spanFlag = document.createElement('span')
    spanFlag.textContent = textFlagSpan
    cardDataFlag.appendChild(spanFlag)//! End card data

    //! Create card data elements
    let cardDataUser = document.createElement('div')
    cardDataUser.setAttribute('class','card__data')
    cardDetails.appendChild(cardDataUser)

    let cardIconUser = document.createElement('svg')
    cardIconUser.setAttribute('class','card__icon')
    cardDataUser.appendChild(cardIconUser)

    let useUser = document.createElement('use')
    useUser.setAttribute('xlink:href' ,'img/icons.svg#icon-user')
    cardDataUser.appendChild(useUser)

    let spanUser = document.createElement('span')
    spanUser.textContent = textUserSpan
    cardDataUser.appendChild(spanUser)//! End card data


    
    //! Create card footer elements
    let cardFooter = document.createElement('div')
    cardFooter.setAttribute('class','card__footer')
    card.appendChild(cardFooter)

    //! Child of footer 
    let footerText = document.createElement('p')
    cardFooter.appendChild(footerText)

    let footerSpanValue = document.createElement('span')
    footerSpanValue.textContent = footerNum
    footerText.appendChild(footerSpanValue)

    let footerSpanText = document.createElement('span')
    footerSpanText.textContent = footerText
    footerText.appendChild(footerSpanText)


    //!
    let footerText2 = document.createElement('p')
    cardFooter.appendChild(footerText2)

    let footerSpanValue2 = document.createElement('span')
    footerSpanValue2.textContent = footerNum2
    footerText2.appendChild(footerSpanValue2)

    let footerSpanText2 = document.createElement('span')
    footerSpanText2.textContent = footerText2
    footerText2.appendChild(footerSpanText2)

    //! Buttons Footer
    let footerButton = document.createElement('button')
    footerButton.classList('btn','btn--brown', 'btn--small')
    footerButton.textContent = 'Details'
    footerButton.setAttribute('type', 'submit')
    footerText2.appendChild(footerButton)

}


//? Get all data from API and put the information in card details
function getCardDetails(api){
    fetch(api)
    .then((city)=> {
        return city.json()
    }).then((details) => {
        details.forEach(data => {
            //! Create object to all required data
            allData = {src:data.src,
                        hotel:data.hotel,
                        subHeading:data.subHeading,
                        url:data.url,
                        span:data.span,
                        textFlagSpan:data.flag,
                        textUserSpan: data.textUserSpan,
                        footerNum: data.footerNum,
                        footerText: data.footerText,
                        footerNum2: data.footerNum2,
                        footerText2:data.footerText2
                     }
                     
            createElementDestination(allData)
        })
    })
}
