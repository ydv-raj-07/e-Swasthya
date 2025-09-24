import mongoose from "mongoose";

const pharmacySchema = new mongoose.Schema({
    pharmacyName: {
        type: String,
        required: true
    },
    ownerName: {
        type: String,
        required: true
    },
    licenseNumber: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },

    verification: {
        status: {
            type: String,
            enum: ["pending", "verified", "rejected"],
            default: "pending"
        },
        verifiedBy: {
            type: String,
            default: "Punjab Health Departement"
        },
        verificationId: {
            type: String,
            required: true
        },
        verifiedAt: {
            type: Date,
            required: true
        },
    },

    medicineList: [{
        medicineName: {
            type: String,
            required: true
        },
        brand: {
            type: String,
        },
        dosage: {
            type: String
        },
        form: {
            type: String,
            enum: ["Tablet", "Capsule", "Syrup", "Injection", "Ointment", "Drops", "Other"],
            required: true
        },
        availableQuantity: {
            type: Number,
            default: 0
        },
        price: {
            type: String,
            required: true
        },
        expiryDate: {
            type: Date,
            required: true
        },
    }],
    prescriptions: [{
        patientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "patient"
        },
        fileUrl: {
            type: String,
            required: true
        },
        uploadedAt: {
            type: Date,
            default: Date.now
        },
        status: {
            type: String,
            enum: ["pending", "rejected", "verified", "fullfield"],
            default: "pending"
        }
    }],

},
    {
        timestamps: true
    }
);

export const pharmacy = mongoose.model("pharmacy",pharmacySchema);