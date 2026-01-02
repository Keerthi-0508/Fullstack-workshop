function validatePassword(password) {
    const errors = [];
    const suggestions = [];
    let score = 0;

    const commonPasswords = [
        "password", "123456", "qwerty", "abc123", "111111", "admin"
    ];
    if (password.length < 8) {
        errors.push("Too short (minimum 8 characters)");
        suggestions.push("Use at least 8 characters");
    } else {
        score += 20;
    }
    if (!/[A-Z]/.test(password)) {
        errors.push("Missing uppercase letter");
        suggestions.push("Add at least one uppercase letter");
    } else {
        score += 15;
    }
    if (!/[a-z]/.test(password)) {
        errors.push("Missing lowercase letter");
        suggestions.push("Add at least one lowercase letter");
    } else {
        score += 15;
    }
    if (!/[0-9]/.test(password)) {
        errors.push("Missing number");
        suggestions.push("Add at least one number");
    } else {
        score += 15;
    }
    if (!/[!@#$%^&*()_+\-=]/.test(password)) {
        errors.push("Missing special character");
        suggestions.push("Add a special character like !@#$");
    } else {
        score += 15;
    }
    if (commonPasswords.includes(password.toLowerCase())) {
        errors.push("Password is too common");
        suggestions.push("Avoid common passwords");
        score -= 30;
    }
    if (password.length >= 12) {
        score += 10;
    }
    score = Math.max(0, Math.min(score, 100));

    return {
        isValid: errors.length === 0,
        score,
        errors,
        suggestions
    };
}
