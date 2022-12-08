const axios = require("axios");

const handleGet = async (req, res) => {
  try {
 
    let queryString=req?.originalUrl?.split("?")?.[1]
    let resData = await axios.get(
      `https://api.github.com/search/repositories?${queryString}`,
      {
        headers: {
          Authorization:`Token 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`,
        },
      }
    );
    let repoList = await resData;
    console.log(repoList.data.items.slice(0,1))
    res.json({data:repoList.data})
  } catch (err) {
    console.log(err)

  
  }
};

module.exports = handleGet;
