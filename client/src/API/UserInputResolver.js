function extractPlaylistId(url) {
    if (!url) url = location.href;

    let name = 'list'
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( url );
    return results == null ? null : results[1];
}

const UserInputResolver = { extractPlaylistId };
export default UserInputResolver;