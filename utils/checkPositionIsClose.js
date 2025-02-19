const checkPositionIsClose = (char_x, char_y, user_x, user_y) => {
    const checkXPosition = user_x >= char_x - 20 && user_x <= char_x + 20;
    const checkYPosition = user_y >= char_y - 40 && user_y <= char_y + 40;
    
    return checkXPosition && checkYPosition;
}

module.exports = checkPositionIsClose;