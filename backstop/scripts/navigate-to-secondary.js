module.exports = function (chromy, scenario, vp) {
    chromy.wait('#resume-link')
    chromy.click('#resume-link')
    chromy.wait(1000)
}