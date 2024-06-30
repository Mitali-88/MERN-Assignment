const bcrypt = require('bcryptjs');
const userModel = require('../../models/userModel');

async function changePassword(req, res) {
    try {
        const { email, password } = req.body;
console.log("data",email,password)
        if (!email) {
            throw new Error("Please provide email");
        }
        if (!password) {
            throw new Error("Please provide password");
        }

        const user = await userModel.findOne({ email });

        if (!user) {
            throw new Error("User not found");
        }
        const salt = bcrypt.genSaltSync(10);
        // Hash the new password
        const hashedPassword = await bcrypt.hash(password, salt);

        // Update the user's password
        user.password = hashedPassword;
        await user.save();
console.log("password change succesfully")
        res.status(200).json({
            message: "Password changed successfully",
            success: true,
            error: false
        });
    } catch (err) {
        res.status(500).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
}

module.exports = changePassword;
