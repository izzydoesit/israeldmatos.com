const user = 'israeldmatos@gmail.com'
const refreshToken = process.env.REACT_APP_GMAIL_REFRESH_TOKEN
const accessToken = process.env.REACT_APP_GMAIL_ACCESS_TOKEN
const clientId = process.env.REACT_APP_GMAIL_CLIENT_ID
const clientSecret = process.env.REACT_APP_GMAIL_CLIENT_SECRET

module.exports = {
  user,
  clientId,
  clientSecret,
  refreshToken,
  accessToken
}