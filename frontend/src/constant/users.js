const users = {
    customer: {
        CONTACT: '/contact',
        Dashboard: '/customer-dashboard',
        'BOOK CAR': '/booking',
        ACCOUNT : '/account',
        'MY BOOKING' : '/history'
    },
    admin : 
        {
            REPORTS: {
                'CAR REPORT' : '/car-reports',
                'CAR TYPE REPORT' : '/car-type-reports',
                'COMPANY REPORT' : '/company-reports',
                'CUSTOMER REPORT' : '/customer-reports',
                'BOOKING REPORT' : '/booking-reports',
            },
            ADD : {
                'ADD CAR' : '/add-car',
                'ADD CAR TYPE' : '/add-car-type',
                'ADD COMPANY' : '/add-company',
            },
        },
    default : {
        CONTACT : '/contact',
        SERVICES : '/services',
        'BOOK A CAR' : '/booking',
        REGISTER : '/register'
    }

};

export default users;