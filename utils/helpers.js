module.exports = {
    get_emoji: () => {
        const randomNum = Math.random();
        let lock = "🔐";

        if (randomNum > 0.7) {
            lock = "🔒"
        } else if (randomNum > 0.4) {
            lock = "🔓";
        }

        return `<span for="img" aria-label="lock">${lock}</span>`;
    },
    
};