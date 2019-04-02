const fetch = require('node-fetch')



test("should pull from API", () => {
    const result = fetch("https://opentdb.com/api.php?amount=1", {})
        .then(response =>  response.json())
        expect(result).toHaveReturned();
})