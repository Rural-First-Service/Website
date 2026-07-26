const customerPrivacy = {
  hero: {
    title: "Privacy Policy for Rural First Service",
    updated: "Last Updated: July 22, 2026",
    description:
      "Rural First Service values your privacy. This Privacy Policy explains how we collect, use, store, and protect your information when you use our services.",
  },

  sections: [
    {
      id: "introduction",
      title: "1. Introduction",
      description: [
        'Rural First Service ("Company", "we", "our", or "us") values your privacy. This Privacy Policy explains how the Rural First Service mobile application collects, uses, stores, and protects your information when you use our services.',
        "By using the application, you agree to the practices described in this Privacy Policy.",
      ],
    },

    {
      id: "information",
      title: "2. Information We Collect",

      groups: [
        {
          title: "Personal Information",
          items: [
            "Full Name",
            "Mobile Number",
            "Email Address",
            "Address",
            "Profile Photo (optional)",
          ],
        },

        {
          title: "Booking Information",
          items: [
            "Service bookings",
            "Appointment date and time",
            "Service address",
            "Payment status",
            "Booking history",
          ],
        },

        {
          title: "Location Information",
          items: [
            "Show nearby service providers",
            "Improve booking accuracy",
            "Provide location-based services",
            "Location access is only used when required.",
          ],
        },

        {
          title: "Device Information",
          items: [
            "Device model",
            "Android version",
            "Device ID",
            "IP Address",
            "App version",
            "Crash logs",
          ],
        },
      ],
    },

    {
      id: "permissions",
      title: "3. Permissions Used",

      description: [
        "The application may request the following permissions only when necessary.",
      ],

      list: [
        "Location",
        "Camera",
        "Photos & Media",
        "Notifications",
        "Internet Access",
      ],
    },

    {
      id: "usage",
      title: "4. How We Use Your Information",

      list: [
        "Create your account",
        "Book services",
        "Contact service providers",
        "Process payments",
        "Send notifications",
        "Improve our services",
        "Prevent fraud",
        "Provide customer support",
      ],
    },

    {
      id: "payments",
      title: "5. Payment Information",

      description: [
        "Payments are processed securely through trusted third-party payment gateways.",
        "We do not store your complete debit or credit card details.",
      ],
    },

    {
      id: "sharing",
      title: "6. Information Sharing",

      description: [
        "We may share information with the following organizations when required.",
      ],

      list: [
        "Verified service providers",
        "Payment providers",
        "Government authorities when legally required",
        "Cloud service providers such as Firebase",
      ],

      note: "We never sell your personal information.",
    },

    {
      id: "security",
      title: "7. Data Security",

      description: [
        "We use industry-standard security measures including encryption, secure servers, authentication, and access controls.",
        "Although we strive to protect your information, no internet transmission is 100% secure.",
      ],
    },

    {
      id: "retention",
      title: "8. Data Retention",

      description: [
        "Your information is retained only as long as necessary to provide services, comply with legal obligations, resolve disputes, and enforce our agreements.",
      ],
    },

    {
      id: "rights",
      title: "9. Your Rights",

      description: [
        "You have the following rights regarding your personal information.",
      ],

      list: [
        "View your information",
        "Update your information",
        "Request account deletion",
        "Request deletion of personal data",
      ],

      note:
        "To request deletion of your account or personal data, contact support@ruralfirstservice.com.",
    },

    {
      id: "children",
      title: "10. Children's Privacy",

      description: [
        "The application is not intended for children under 13 years of age.",
      ],
    },

    {
      id: "thirdparty",
      title: "11. Third-Party Services",

      description: [
        "The application may use the following third-party services.",
      ],

      list: [
        "Firebase Authentication",
        "Firebase Cloud Messaging",
        "Firebase Analytics (if enabled)",
        "Google Maps",
        "Payment Gateway Services",
      ],

      note: "These services have their own privacy policies.",
    },

    {
      id: "changes",
      title: "12. Changes to this Policy",

      description: [
        "We may update this Privacy Policy periodically.",
        "The updated version will always be available on this page.",
      ],
    },

    {
      id: "contact",
      title: "13. Contact Us",

      contact: {
        company: "Rural First Service",
        website: "https://www.ruralfirstservice.com",
        email: "support@ruralfirstservice.com",
      },
    },
  ],

  cta: {
    title: "Still have questions?",
    description:
      "If you have any questions regarding this Privacy Policy, feel free to contact us.",
    email: "support@ruralfirstservice.com",
  },
};

export default customerPrivacy;