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