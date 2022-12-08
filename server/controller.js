const axios = require("axios");

const handleGet = async (req, res) => {
  try {
 
    let queryString=req?.originalUrl?.split("?")?.[1]
    let resData = await axios.get(
      `https://api.github.com/search/repositories?${queryString}`,
      {
        headers: {
          Authorization:`Token ${process.env.TOKEN?.replace(/\^/g,"")}`,
        },
      }
    );
    let repoList = await resData;
    res.json({data:repoList.data})
  } catch (err) {

  
  }
};

module.exports = handleGet;
