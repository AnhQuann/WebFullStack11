$(document).ready(() => {
    listenToFormSubmitEvent()
})

const listenToFormSubmitEvent = () => {
    const formElement = $(".article-search-form__input");
    formElement.keyup(async event => {
        $(".article-list").empty();
        event.preventDefault();
        let keyWord = $(".article-search-form__input").val();
        const data = await $.ajax({
          url: 'https://en.wikipedia.org/w/api.php',
          data: {
            action: "query",
            list: "search",
            format: "json",
            srprop: "snippet",
            origin: "*",
            srsearch: encodeURI(keyWord)
          },
        })

        let arrayData = data.query.search;
        for (let i = 0; i < arrayData.length; i++) {
          $(".article-list").append(
            `<a href="https://en.wikipedia.org/?curid=${arrayData[i].pageid}" target="_blank" class="article-view">
          <h3 className="article-view__title">${arrayData[i].title}</h3>
          <p className="article-view__snippet">${arrayData[i].snippet}</p>`)
        }

    })
}
