import { OurProductsServiceService } from './../sevices/our-products-service.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RegisterFormService {
    data = {};
    maritalStatus = [
        { label: 'Unmarried', value: 'unmarried' },
        { label: 'Divorce', value: 'divorce' },
        { label: 'Widow', value: 'widow' },
        { label: 'Widower', value: 'widower' }];

    caste = [
        { label: 'Bhoi', value: 'Bhoi' },
        { label: 'Raj Bhoi', value: 'RajBhoi' },
        { label: 'Zing bhoi', value: 'Zingbhoi' },
        { label: 'Paradeshi Bhoi', value: 'ParadeshiBhoi' },
        { label: 'Kahar Bhoi', value: 'KaharBhoi' },
        { label: 'Godiya Kahar Bhoi', value: 'GodiyaKaharBhoi' },
        { label: 'Dhuriya Kahar Bhoi', value: 'DhuriyaKaharBhoi' },
        { label: 'Mazi Kahar Bhoi', value: 'MaziKaharBhoi' },
        { label: 'Kirat Bhoi', value: 'KiratBhoi' },
        { label: 'Machua Bhoi', value: 'MachuaBhoi' },
        { label: 'Mazi Bhoi', value: 'MaziBhoi' },
        { label: 'Jaliya Bhoi', value: 'JaliyaBhoi' },
        { label: 'Kevat Bhoi', value: 'KevatBhoi' },
        { label: 'Divar Bhoi', value: 'DivarBhoi' },
        { label: 'Dhivar Bhoi', value: 'DhivarBhoi' },
        { label: 'Palevaar Bhoi', value: 'PalevaarBhoi' },
        { label: 'Navadi Bhoi', value: 'NavadiBhoi' },
        { label: 'Machendra Bhoi', value: 'MachendraBhoi' },
        { label: 'Malhar Bhoi', value: 'MalharBhoi' },
        { label: 'Malhava Bhoi', value: 'MalhavaBhoi' },
        { label: 'Boi Bhujri', value: 'BoiBhujri' },
        { label: 'Khadi Bhoi', value: 'Khadi Bhoi' },
        { label: 'Khare Bhoi', value: 'KhareBhoi' },
        { label: 'Dhevara Bhoi', value: 'DhevaraBhoi' },
    ];

    surname = [
        { label: 'Wadile', value: 'Wadile' },
        { label: 'More', value: 'More' },
        { label: 'Dhole', value: 'Dhole' },
        { label: 'Shivade', value: 'Shivade' },
        { label: 'Tamkhane', value: 'Tamkhane' },
        { label: 'Tavade', value: 'Tavade' },
        { label: 'Satote', value: 'Satote' },
        { label: 'Nikvade', value: 'Nikvade' },
        { label: 'Wadekar', value: 'Wadekar' },
        { label: 'Hajban', value: 'Hajban' },
        { label: 'Harane', value: 'Harane' },
        { label: 'Tamase', value: 'Tamase' },
        { label: 'Dhanrale', value: 'Dhanrale' },
        { label: 'Sonawane', value: 'Sonawane' },
        { label: 'Tomabde', value: 'Tomabde' },
        { label: 'Suryawanshi', value: 'Suryawanshi' },
        { label: 'MoreWanshi', value: 'MoreWanshi' },
        { label: 'Bendre', value: 'Bendre' },
        { label: 'Nandrale', value: 'Nandrale' },
        { label: 'Kankrale', value: 'Kankrale' },
        { label: 'Sevape', value: 'Sevape' },
        { label: 'Fulpagare', value: 'Fulpagare' },
        { label: 'Ramole', value: 'Ramole' },
        { label: 'Mohane', value: 'Mohane' },
        { label: 'Jaware', value: 'Jaware' },
        { label: 'Khedkar', value: 'Khedkar' },
        { label: 'Malkar', value: 'Malkar' },
        { label: 'Chavhan', value: 'Chavhan' },
        { label: 'Kusumbe', value: 'Kusumbe' },
        { label: 'Lade', value: 'Lade' },
        { label: 'Borade', value: 'Borade' },
        { label: 'Baede', value: 'Baede' },
        { label: 'Borase', value: 'Borase' },
        { label: 'Balsakade', value: 'Balsakade' },
        { label: 'Shrinath', value: 'Shrinath' },
        { label: 'Nandurbare', value: 'Nandurbare' },
        { label: 'Waghe', value: 'Waghe' },
        { label: 'Jadhav', value: 'Jadhav' },
        { label: 'Vankhede', value: 'Vankhede' },
        { label: 'Nukte', value: 'Nukte' },
        { label: 'Bathame', value: 'Bathame' },
        { label: 'Bakane', value: 'Bakane' },
        { label: 'Ghate', value: 'Ghate' },
        { label: 'Shingane', value: 'Shingane' },
        { label: 'Bavane', value: 'Bavane' },
        { label: 'Kale', value: 'Kale' },
        { label: 'Bhoite', value: 'Bhoite' },
        { label: 'Kandile', value: 'Kandile' },
        { label: 'Zavare', value: 'Zavare' },
        { label: 'Vayade', value: 'Vayade' },
        { label: 'Gargade', value: 'Gargade' },
        { label: 'Bamdare', value: 'Bamdare' },
        { label: 'Walde', value: 'Walde' },
        { label: 'Eangale', value: 'Eangale' },
        { label: 'Khedkar', value: 'Khedkar' },
        { label: 'Ghatmal', value: 'Ghatmal' },
        { label: 'Shravane', value: 'Shravane' },
        { label: 'Lambole', value: 'Lambole' },
    ];


    MaternalUnclesSurname = [
        { label: 'Wadile', value: 'Wadile' },
        { label: 'More', value: 'More' },
        { label: 'Dhole', value: 'Dhole' },
        { label: 'Shivade', value: 'Shivade' },
        { label: 'Tamkhane', value: 'Tamkhane' },
        { label: 'Tavade', value: 'Tavade' },
        { label: 'Satote', value: 'Satote' },
        { label: 'Nikvade', value: 'Nikvade' },
        { label: 'Wadekar', value: 'Wadekar' },
        { label: 'Hajban', value: 'Hajban' },
        { label: 'Harane', value: 'Harane' },
        { label: 'Tamase', value: 'Tamase' },
        { label: 'Dhanrale', value: 'Dhanrale' },
        { label: 'Sonawane', value: 'Sonawane' },
        { label: 'Tomabde', value: 'Tomabde' },
        { label: 'Suryawanshi', value: 'Suryawanshi' },
        { label: 'MoreWanshi', value: 'MoreWanshi' },
        { label: 'Bendre', value: 'Bendre' },
        { label: 'Nandrale', value: 'Nandrale' },
        { label: 'Kankrale', value: 'Kankrale' },
        { label: 'Sevape', value: 'Sevape' },
        { label: 'Fulpagare', value: 'Fulpagare' },
        { label: 'Ramole', value: 'Ramole' },
        { label: 'Mohane', value: 'Mohane' },
        { label: 'Jaware', value: 'Jaware' },
        { label: 'Khedkar', value: 'Khedkar' },
        { label: 'Malkar', value: 'Malkar' },
        { label: 'Chavhan', value: 'Chavhan' },
        { label: 'Kusumbe', value: 'Kusumbe' },
        { label: 'Lade', value: 'Lade' },
        { label: 'Borade', value: 'Borade' },
        { label: 'Baede', value: 'Baede' },
        { label: 'Borase', value: 'Borase' },
        { label: 'Balsakade', value: 'Balsakade' },
        { label: 'Shrinath', value: 'Shrinath' },
        { label: 'Nandurbare', value: 'Nandurbare' },
        { label: 'Waghe', value: 'Waghe' },
        { label: 'Jadhav', value: 'Jadhav' },
        { label: 'Vankhede', value: 'Vankhede' },
        { label: 'Nukte', value: 'Nukte' },
        { label: 'Bathame', value: 'Bathame' },
        { label: 'Bakane', value: 'Bakane' },
        { label: 'Ghate', value: 'Ghate' },
        { label: 'Shingane', value: 'Shingane' },
        { label: 'Bavane', value: 'Bavane' },
        { label: 'Kale', value: 'Kale' },
        { label: 'Bhoite', value: 'Bhoite' },
        { label: 'Kandile', value: 'Kandile' },
        { label: 'Zavare', value: 'Zavare' },
        { label: 'Vayade', value: 'Vayade' },
        { label: 'Gargade', value: 'Gargade' },
        { label: 'Bamdare', value: 'Bamdare' },
        { label: 'Walde', value: 'Walde' },
        { label: 'Eangale', value: 'Eangale' },
        { label: 'Khedkar', value: 'Khedkar' },
        { label: 'Ghatmal', value: 'Ghatmal' },
        { label: 'Shravane', value: 'Shravane' },
        { label: 'Lambole', value: 'Lambole' },
    ];

    brother = [
        { label: 'No Brother', value: '0' },
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' },
        { label: '8', value: '8' },
        { label: '9', value: '9' },
        { label: '10', value: '10' }
    ];

    marriedbrother = [
        { label: 'No', value: '0' },
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' },
        { label: '8', value: '8' },
        { label: '9', value: '9' },
        { label: '10', value: '10' }
    ];

    sister = [
        { label: 'No Sister', value: '0' },
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' },
        { label: '8', value: '8' },
        { label: '9', value: '9' },
        { label: '10', value: '10' }
    ];

    marriedSister = [
        { label: 'No', value: '0' },
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' },
        { label: '8', value: '8' },
        { label: '9', value: '9' },
        { label: '10', value: '10' }
    ];

    zodiacSign = [
        { label: 'N/A', value: 'na' },
        { label: 'Aries', value: 'Aries' },
        { label: 'Taurus', value: 'aurus' },
        { label: 'Gemini', value: 'Gemini' },
        { label: 'Cancer', value: 'Cancer' },
        { label: 'Leo', value: 'Leo' },
        { label: 'Virgo', value: 'Virgo' },
        { label: 'Libra', value: 'Libra' },
        { label: 'Scorpius', value: 'Scorpius' },
        { label: 'Sagittarius', value: 'Sagittarius' },
        { label: 'Capricornus', value: 'Capricornus' },
        { label: 'Aquarius', value: 'Aquarius' },
        { label: 'Pisces', value: 'Pisces' }
    ];

    nakshtra = [
        { label: 'N/A', value: 'na' },
        { label: 'Ashwini', value: 'Ashwini' },
        { label: 'Bharni', value: 'Bharni' },
        { label: 'Kritika', value: 'Kritika' },
        { label: 'Rohini', value: 'Rohini' },
        { label: 'Mrigashīrsha', value: 'Mrigashīrsha' },
        { label: 'Aardra', value: 'Aardra' },
        { label: 'Punrvasu', value: 'Punrvasu' },
        { label: 'Pushya', value: 'Pushya' },
        { label: 'Ashlesha', value: 'Ashlesha' },
        { label: 'Magha', value: 'Magha' },
        { label: 'Purva', value: 'Purva' },
        { label: 'Uttra', value: 'Uttra' },
        { label: 'Hasta', value: 'Hasta' },
        { label: 'Chitra', value: 'Chitra' },
        { label: 'Swati', value: 'Swati' },
        { label: 'Vishakha', value: 'Vishakha' },
        { label: 'Anuradha', value: 'Anuradha' },
        { label: 'Jeshtha', value: 'Jeshtha' },
        { label: 'Mool', value: 'Mool' },
        { label: 'Purvashadha', value: 'Purvashadha' },
        { label: 'Uttrashadha', value: 'Uttrashadha' },
        { label: 'Shravan', value: 'Shravan' },
        { label: 'Dhanishtha', value: 'Dhanishtha' },
        { label: 'Shatatarka', value: 'Shatatarka' },
        { label: 'Purvabhadrapada', value: 'Purvabhadrapada' },
        { label: 'Uttarabhadrapada', value: 'Uttarabhadrapada' },
        { label: 'Revati', value: 'Revati' }
    ];

    birthTime = [
        { label: 'Early Morning', value: 'EarlyMorning' },
        { label: 'Morning', value: 'Morning' },
        { label: 'Afternoon', value: 'Afternoon' },
        { label: 'Evening', value: 'Evening' },
        { label: 'Night', value: 'Night' }
    ];
      
    nadi = [
        { label: 'N/A', value: 'na' },
        { label: 'Adya', value: 'adya' },
        { label: 'Madhya', value: 'madhya' },
        { label: 'Antya', value: 'antya' }
    ];

    height = [
        { label: 'Below 4ft', value: 'below4ft' },
        { label: '4Ft', value: '4ft' },
        { label: '4Ft 1In', value: '4ft_1in' },
        { label: '4Ft 2In', value: '4ft_2in' },
        { label: '4Ft 3In', value: '4ft_3in' },
        { label: '4Ft 4In', value: '4ft_4in' },
        { label: '4Ft 5In', value: '4ft_5in' },
        { label: '4Ft 6In', value: '4ft_6in' },
        { label: '4Ft 7In', value: '4ft_7in' },
        { label: '4Ft 8In', value: '4ft_8in' },
        { label: '4Ft 9In', value: '4ft_9in' },
        { label: '4Ft 10In', value: '4ft_10in' },
        { label: '4Ft 11In', value: '4ft_11in' },
         { label: '5Ft', value: '5ft' },
        { label: '5Ft 1In', value: '5ft_1in' },
        { label: '5Ft 2In', value: '5ft_2in' },
        { label: '5Ft 3In', value: '5ft_3in' },
        { label: '5Ft 4In', value: '5ft_4in' },
        { label: '5Ft 5In', value: '5ft_5in' },
        { label: '5Ft 6In', value: '5ft_6in' },
        { label: '5Ft 7In', value: '5ft_7in' },
        { label: '5Ft 8In', value: '5ft_8in' },
        { label: '5Ft 9In', value: '5ft_9in' },
        { label: '5Ft 10In', value: '5ft_10in' },
        { label: '5Ft 11In', value: '5ft_11in' },
         { label: '6Ft', value: '6ft' },
        { label: '6Ft 1In', value: '6ft_1in' },
        { label: '6Ft 2In', value: '6ft_2in' },
        { label: '6Ft 3In', value: '6ft_3in' },
        { label: '6Ft 4In', value: '6ft_4in' },
        { label: '6Ft 5In', value: '6ft_5in' },
        { label: '6Ft 6In', value: '6ft_6in' },
        { label: '6Ft 7In', value: '6ft_7in' },
        { label: '6Ft 8In', value: '6ft_8in' },
        { label: '6Ft 9In', value: '6ft_9in' },
        { label: '6Ft 10In', value: '6ft_10in' },
        { label: '6Ft 11In', value: '6ft_11in' },
        { label: '7Ft', value: '7ft' },
        { label: 'Above 7Ft', value: 'above7ft' },

        
        
        
    ];

    weight = [
        { label: '41kg', value: '41kg' },
        { label: '42kg', value: '42kg' },
        { label: '43kg', value: '43kg' },
        { label: '44kg', value: '44kg' },
        { label: '45kg', value: '45kg' },
        { label: '46kg', value: '46kg' },
        { label: '47kg', value: '47kg' },
        { label: '48kg', value: '48kg' },
        { label: '49kg', value: '49kg' },
        { label: '50kg', value: '50kg' },
        { label: '51kg', value: '51kg' },
        { label: '52kg', value: '52kg' },
        { label: '53kg', value: '53kg' },
        { label: '54kg', value: '54kg' },
        { label: '55kg', value: '55kg' },
        { label: '56kg', value: '56kg' },
        { label: '57kg', value: '57kg' },
        { label: '58kg', value: '58kg' },
        { label: '59kg', value: '59kg' },
        { label: '60kg', value: '60kg' },
        { label: '61kg', value: '61kg' },
        { label: '62kg', value: '62kg' },
        { label: '63kg', value: '63kg' },
        { label: '64kg', value: '64kg' },
        { label: '65kg', value: '65kg' },
        { label: '66kg', value: '66kg' },
        { label: '67kg', value: '67kg' },
        { label: '68kg', value: '68kg' },
        { label: '69kg', value: '69kg' },
        { label: '70kg', value: '70kg' },
        { label: '71kg', value: '71kg' },
        { label: '72kg', value: '72kg' },
        { label: '73kg', value: '73kg' },
        { label: '74kg', value: '74kg' },
        { label: '75kg', value: '75kg' },
        { label: '76kg', value: '76kg' },
        { label: '77kg', value: '77kg' },
        { label: '78kg', value: '78kg' },
        { label: '79kg', value: '79kg' },
        { label: '80kg', value: '80kg' },
        { label: '81kg', value: '81kg' },
        { label: '82kg', value: '82kg' },
        { label: '83kg', value: '83kg' },
        { label: '84kg', value: '84kg' },
        { label: '85kg', value: '85kg' },
        { label: '86kg', value: '86kg' },
        { label: '87kg', value: '87kg' },
        { label: '88kg', value: '88kg' },
        { label: '89kg', value: '89kg' },
        { label: '90kg', value: '90kg' },
        { label: '91kg', value: '91kg' },
        { label: '92kg', value: '92kg' },
        { label: '93kg', value: '93kg' },
        { label: '94kg', value: '94kg' },
        { label: '95kg', value: '95kg' },
        { label: '96kg', value: '96kg' },
        { label: '97kg', value: '97kg' },
        { label: '98kg', value: '98kg' },
        { label: '99kg', value: '99kg' },
        { label: '100kg', value: '100kg' },
        { label: 'Above 100kg', value: 'above100kg'}
    ];

    bloodGroup = [
        { label: 'A+ve', value: 'A+ve' },
        { label: 'A-ve', value: 'A-ve' },
        { label: 'B+ve', value: 'B+ve' },
        { label: 'B-ve', value: 'B-ve' },
        { label: 'AB+ve', value: 'AB+ve' },
        { label: 'AB-ve', value: 'AB-ve' },
        { label: 'O+ve', value: 'O+ve' },
        { label: 'O-ve', value: 'O-ve' }
    ];

    complexion = [
        { label: 'Fair', value: 'Fair' },
        { label: 'Wheatish', value: 'Wheatish' },
        { label: 'Dark', value: 'Dark' }    
    ];

    education = [
        { label: 'Graduate', value: 'Graduate' },
        { label: 'Post-Graduate', value: 'Post-Graduate' },
        { label: 'Diploma', value: 'Diploma' },
        { label: 'Under-Graduate', value: 'Under-Graduate' },
        { label: 'Engineer', value: 'Engineer' },
        { label: 'Doctor', value: 'Doctor' },
        { label: 'Teacher', value: 'Teacher' },
        { label: 'Advocate', value: 'Advocate' }    
    ];


    constructor(
        private ourProductsServiceService: OurProductsServiceService,

    ) { }
    getForm(config?: any): any {
        return {
            components: [
                {
                    components: [
                        {
                            label: 'Columns',
                            columns: [
                                {
                                    components: [
                                        {
                                            label: 'Full Name',
                                            placeholder: 'Enter Full Name',
                                            tableView: true,
                                            validate: {
                                                required: true
                                            },
                                            key: 'fullName',
                                            type: 'textfield',
                                            input: true,
                                            hideOnChildrenHidden: false
                                        },
                                        {
                                            label: 'Marital Status',
                                            widget: 'choicesjs',
                                            tableView: true,
                                            data: {
                                                values: this.maritalStatus
                                            },
                                            selectThreshold: 0.3,
                                            validate: {
                                                required: true
                                            },
                                            key: 'marital_Status',
                                            type: 'select',
                                            indexeddb: {
                                                filter: {}
                                            },
                                            input: true,
                                            hideOnChildrenHidden: false
                                        },
                                        {
                                            label: 'Your Surname',
                                            widget: 'choicesjs',
                                            placeholder: 'Select Surname',
                                            tableView: true,
                                            data: {
                                                values: this.surname
                                            },
                                            selectThreshold: 0.3,
                                            validate: {
                                                required: true
                                            },
                                            key: 'your_Surname',
                                            type: 'select',
                                            indexeddb: {
                                                filter: {}
                                            },
                                            input: true,
                                            hideOnChildrenHidden: false
                                        },
                                        {
                                            label: 'Other Surname',
                                            placeholder: 'If your surname is not in list',
                                            tableView: true,
                                            validate: {
                                                required: false
                                            },
                                            key: 'other_Surname',
                                            type: 'textfield',
                                            input: true,
                                            hideOnChildrenHidden: false
                                        },
                                        {
                                            label: 'Job / Business',
                                            placeholder: 'Enter Job / Business',
                                            tableView: true,
                                            validate: {
                                                required: true
                                            },
                                            key: 'job_business',
                                            type: 'textfield',
                                            input: true,
                                            hideOnChildrenHidden: false
                                        },
                                        {
                                            label: 'Education',
                                            widget: 'choicesjs',
                                            placeholder: 'Select',
                                            tableView: true,
                                            data: {
                                                values: this.education
                                            },
                                            selectThreshold: 0.3,
                                            key: 'education',
                                            type: 'select',
                                            indexeddb: {
                                                filter: {}
                                            },
                                            input: true,
                                            hideOnChildrenHidden: false
                                        },
                                        {
                                            label: 'Sister',
                                            tableView: true,
                                            data: {
                                                values: this.sister
                                            },
                                            selectThreshold: 0.3,
                                            validate: {
                                                required: true
                                            },
                                            key: 'sister',
                                            type: 'select',
                                            indexeddb: {
                                                filter: {}
                                            },
                                            input: true,
                                            hideOnChildrenHidden: false
                                        },
                                        {
                                            label: 'Married Sister',
                                            widget: 'choicesjs',
                                            tableView: true,
                                            data: {
                                                values: this.marriedSister
                                            },
                                            selectThreshold: 0.3,
                                            validate: {
                                                required: true
                                            },
                                            key: 'married_Sister',
                                            type: 'select',
                                            indexeddb: {
                                                filter: {}
                                            },
                                            input: true,
                                            hideOnChildrenHidden: false
                                        },
                                        {
                                            label: 'Father',
                                            optionsLabelPosition: 'right',
                                            inline: false,
                                            tableView: false,
                                            defaultValue: 'yes',
                                            values: [
                                                {
                                                    label: 'Yes',
                                                    value: 'yes',
                                                    shortcut: ''
                                                },
                                                {
                                                    label: 'No',
                                                    value: 'no',
                                                    shortcut: ''
                                                }
                                            ],
                                            validate: {
                                                required: true
                                            },
                                            key: 'father',
                                            type: 'radio',
                                            input: true,
                                            hideOnChildrenHidden: false
                                        },
                                        {
                                            label: 'Mother',
                                            optionsLabelPosition: 'right',
                                            inline: false,
                                            tableView: false,
                                            defaultValue: 'yes',
                                            values: [
                                                {
                                                    label: 'Yes',
                                                    value: 'yes',
                                                    shortcut: ''
                                                },
                                                {
                                                    label: 'No',
                                                    value: 'no',
                                                    shortcut: ''
                                                }
                                            ],
                                            key: 'mother',
                                            type: 'radio',
                                            input: true,
                                            hideOnChildrenHidden: false
                                        },
                                        
                                    ],
                                    width: 6,
                                    offset: 0,
                                    push: 0,
                                    pull: 0,
                                    size: 'md'
                                },
                                {
                                    components: [
                                        {
                                            label: 'Date Of Birth',
                                            format: 'yyyy-MM-dd',
                                            tableView: false,
                                            enableMinDateInput: false,
                                            datePicker: {
                                                disableWeekends: false,
                                                disableWeekdays: false
                                            },
                                            enableMaxDateInput: false,
                                            validate: {
                                                required: true
                                            },
                                            key: 'dOB',
                                            type: 'datetime',
                                            input: true,
                                            widget: {
                                                type: 'calendar',
                                                displayInTimezone: 'viewer',
                                                locale: 'en',
                                                useLocaleSettings: false,
                                                allowInput: true,
                                                mode: 'single',
                                                enableTime: true,
                                                noCalendar: false,
                                                format: 'yyyy-MM-dd',
                                                hourIncrement: 1,
                                                minuteIncrement: 1,
                                                time_24hr: false,
                                                minDate: null,
                                                disableWeekends: false,
                                                disableWeekdays: false,
                                                maxDate: null
                                            },
                                            hideOnChildrenHidden: false
                                        },
                                        {
                                            label: 'Caste/Sub Caste',
                                            widget: 'choicesjs',
                                            tableView: true,
                                            data: {
                                                values: this.caste
                                            },
                                            selectThreshold: 0.3,
                                            validate: {
                                                required: true
                                            },
                                            key: 'caste',
                                            type: 'select',
                                            indexeddb: {
                                                filter: {}
                                            },
                                            input: true,
                                            hideOnChildrenHidden: false
                                        },
                                        {
                                            label: 'Maternal Uncle Surname',
                                            widget: 'choicesjs',
                                            placeholder: 'Enter Maternal Uncle Surname',
                                            tableView: true,
                                            data: {
                                                values: this.MaternalUnclesSurname
                                            },
                                            selectThreshold: 0.3,
                                            validate: {
                                                required: true
                                            },
                                            key: 'maternal_Uncle_Surname',
                                            type: 'select',
                                            indexeddb: {
                                                filter: {}
                                            },
                                            input: true,
                                            hideOnChildrenHidden: false
                                        },
                                        {
                                            label: 'Maternal Uncle Surname(If not in List)',
                                            placeholder: 'Maternal Uncle Surname',
                                            tableView: true,
                                            validate: {
                                                required: false
                                            },
                                            key: 'maternal_Uncle_Surname_optional',
                                            type: 'textfield',
                                            input: true,
                                            hideOnChildrenHidden: false
                                        },
                                        {
                                            label: 'Annual Income',
                                            placeholder: 'Enter Annual Income',
                                            tableView: true,
                                            validate: {
                                                required: true
                                            },
                                            key: 'annual_Income',
                                            type: 'textfield',
                                            input: true,
                                            hideOnChildrenHidden: false
                                        },
                                        {
                                            label: 'Occupation',
                                            placeholder: 'Enter Occupation',
                                            tableView: true,
                                            validate: {
                                                required: true
                                            },
                                            key: 'occupation',
                                            type: 'textfield',
                                            input: true,
                                            hideOnChildrenHidden: false
                                        },
                                        {
                                            label: 'Brother',
                                            tableView: true,
                                            data: {
                                                values: this.brother
                                            },
                                            selectThreshold: 0.3,
                                            validate: {
                                                required: true
                                            },
                                            key: 'brother',
                                            type: 'select',
                                            indexeddb: {
                                                filter: {}
                                            },
                                            input: true,
                                            hideOnChildrenHidden: false
                                        },
                                        {
                                            label: 'Married Brother',
                                            tableView: true,
                                            data: {
                                                values: this.marriedbrother
                                            },
                                            selectThreshold: 0.3,
                                            validate: {
                                                required: true
                                            },
                                            key: 'married_Brother',
                                            type: 'select',
                                            indexeddb: {
                                                filter: {}
                                            },
                                            input: true,
                                            hideOnChildrenHidden: false
                                        },
                                        {
                                            label: 'Select',
                                            optionsLabelPosition: 'right',
                                            inline: false,
                                            tableView: false,
                                            values: [
                                                {
                                                    label: 'Groom',
                                                    value: 'groom',
                                                    shortcut: ''
                                                },
                                                {
                                                    label: 'Bride',
                                                    value: 'bride',
                                                    shortcut: ''
                                                }
                                            ],
                                            key: 'groom_Bride',
                                            type: 'radio',
                                            input: true,
                                            hideOnChildrenHidden: false
                                        },
                                        
                                    ],
                                    width: 6,
                                    offset: 0,
                                    push: 0,
                                    pull: 0,
                                    size: 'md'
                                }
                            ],
                            key: 'columns',
                            type: 'columns',
                            input: false,
                            tableView: false
                        }
                    ]
                },
                {
                    title: 'New Account Information',
                    collapsible: false,
                    key: 'newAccountInformation',
                    type: 'panel',
                    label: 'Panel',
                    input: false,
                    tableView: false,
                    components: [
                        {
                            label: 'Columns',
                            columns: [
                                {
                                    components: [
                                        {
                                            label: 'E-mail',
                                            placeholder: 'Enter Your Email',
                                            tableView: true,
                                            validate: {
                                                required: true
                                            },
                                            key: 'email',
                                            type: 'textfield',
                                            input: true,
                                            hideOnChildrenHidden: false
                                        },
                                        {
                                            label: 'Permanent Address(with pincode)',
                                            placeholder: 'Enter Your Address',
                                            autoExpand: false,
                                            tableView: true,
                                            validate: {
                                                required: true
                                            },
                                            key: 'permanent_Address',
                                            type: 'textarea',
                                            input: true,
                                            hideOnChildrenHidden: false
                                        },
                                        {
                                            label: 'City',
                                            placeholder: 'Enter City',
                                            tableView: true,
                                            validate: {
                                                required: true
                                            },
                                            key: 'city',
                                            type: 'textfield',
                                            input: true,
                                            hideOnChildrenHidden: false
                                        },
                                        {
                                            label: 'Landline No.(If Available)',
                                            placeholder: 'Enter Landline No.(If Available)',
                                            inputMask: '99999999999',
                                            tableView: true,
                                            validate: {
                                                customMessage: 'Please Enter Valid Landline No.(If Available)'
                                            },
                                            key: 'landline_No',
                                            type: 'phoneNumber',
                                            input: true,
                                            hideOnChildrenHidden: false
                                        }
                                    ],
                                    width: 6,
                                    offset: 0,
                                    push: 0,
                                    pull: 0,
                                    size: 'md'
                                },
                                {
                                    components: [
                                        {
                                            label: 'Password',
                                            placeholder: 'Enter Password',
                                            tableView: true,
                                            validate: {
                                                required: true
                                            },
                                            key: 'password',
                                            type: 'textfield',
                                            input: true,
                                            hideOnChildrenHidden: false
                                        },
                                        {
                                            label: 'Current Address',
                                            placeholder: 'Enter Current Address',
                                            autoExpand: false,
                                            tableView: true,
                                            validate: {
                                                required: true
                                            },
                                            key: 'current_Address',
                                            type: 'textarea',
                                            input: true,
                                            hideOnChildrenHidden: false
                                        },
                                        {
                                            label: 'Contact No.1',
                                            placeholder: 'Enter Contact No',
                                            inputMask: '9999999999',
                                            tableView: true,
                                            validate: {
                                                required: true,
                                                customMessage: 'Please Enter 10 Digit Contact No'
                                            },
                                            key: 'contact_No_1',
                                            type: 'phoneNumber',
                                            input: true,
                                            hideOnChildrenHidden: false
                                        },
                                        {
                                            label: 'Contact No 2',
                                            placeholder: 'Enter Contact Number',
                                            inputMask: '9999999999',
                                            tableView: true,
                                            validate: {
                                                required: true,
                                                customMessage: 'Please Enter 10 Digit Contact No'
                                            },
                                            key: 'contact_No_2',
                                            type: 'phoneNumber',
                                            input: true,
                                            hideOnChildrenHidden: false
                                        }
                                    ],
                                    width: 6,
                                    offset: 0,
                                    push: 0,
                                    pull: 0,
                                    size: 'md'
                                }
                            ],
                            key: 'columns3',
                            type: 'columns',
                            input: false,
                            tableView: false
                        }
                    ]
                },
                {
                    title: 'Religious Attributes',
                    collapsible: false,
                    key: 'religiousAttributes',
                    type: 'panel',
                    label: 'Religious Attributes',
                    input: false,
                    tableView: false,
                    components: [
                        {
                            label: 'Columns',
                            columns: [
                                {
                                    components: [
                                        {
                                            label: 'Zodiac Sign',
                                            widget: 'choicesjs',
                                            placeholder: 'Select',
                                            tableView: true,
                                            data: {
                                                values: this.zodiacSign
                                            },
                                            selectThreshold: 0.3,
                                            validate: {
                                                required: true
                                            },
                                            key: 'zodiac_Sign',
                                            type: 'select',
                                            indexeddb: {
                                                filter: {}
                                            },
                                            input: true,
                                            hideOnChildrenHidden: false
                                        },
                                        {
                                            html: '<p>Birth Time</p>',
                                            label: 'Content',
                                            refreshOnChange: false,
                                            key: 'content',
                                            type: 'content',
                                            input: false,
                                            tableView: false,
                                            hideOnChildrenHidden: false
                                        },
                                        {
                                            label: 'Columns',
                                            columns: [
                                                {
                                                    components: [
                                                        {
                                                            label: 'Select',
                                                            widget: 'choicesjs',
                                                            tableView: true,
                                                            data: {
                                                                values: this.birthTime
                                                            },
                                                            selectThreshold: 0.3,
                                                            key: 'birth_Time',
                                                            type: 'select',
                                                            indexeddb: {
                                                                filter: {}
                                                            },
                                                            input: true,
                                                            hideOnChildrenHidden: false
                                                        }
                                                    ],
                                                    width: 6,
                                                    offset: 0,
                                                    push: 0,
                                                    pull: 0,
                                                    size: 'md'
                                                },
                                                {
                                                    
                                                    components: [
                                                        {
                                                            label: 'Time',
                                                            tableView: true,
                                                            validate: {
                                                                required: true
                                                            },
                                                            key: 'birth_Time_HrMin',
                                                            type: 'time',
                                                            input: true,
                                                            inputMask: '99:99',
                                                            defaultValue: '00:00:00'
                                                        }
                                                    ] ,

                                                    width: 6,
                                                    offset: 0,
                                                    push: 0,
                                                    pull: 0,
                                                    size: 'md'
                                                },
                                                 
                                            ],
                                            key: 'columns2',
                                            type: 'columns',
                                            input: false,
                                            tableView: false
                                        },
                                        {
                                            label: 'Mangal',
                                            labelPosition: 'left-left',
                                            optionsLabelPosition: 'right',
                                            inline: false,
                                            tableView: false,
                                            values: [
                                                {
                                                    label: 'Yes',
                                                    value: 'yes',
                                                    shortcut: ''
                                                },
                                                {
                                                    label: 'No',
                                                    value: 'no',
                                                    shortcut: ''
                                                }
                                            ],
                                            validate: {
                                                required: true
                                            },
                                            key: 'mangal',
                                            type: 'radio',
                                            input: true,
                                            hideOnChildrenHidden: false
                                        }
                                    ],
                                    width: 6,
                                    offset: 0,
                                    push: 0,
                                    pull: 0,
                                    size: 'md'
                                },
                                {
                                    components: [
                                        {
                                            label: 'Nakshatras',
                                            widget: 'choicesjs',
                                            placeholder: 'Select',
                                            tableView: true,
                                            data: {
                                                values: this.nakshtra
                                            },
                                            selectThreshold: 0.3,
                                            key: 'nakshatras',
                                            type: 'select',
                                            indexeddb: {
                                                filter: {}
                                            },
                                            input: true,
                                            hideOnChildrenHidden: false
                                        },
                                        {
                                            label: 'Birth Place',
                                            tableView: true,
                                            validate: {
                                                required: true
                                            },
                                            key: 'birth_Place',
                                            type: 'textfield',
                                            input: true,
                                            hideOnChildrenHidden: false
                                        },
                                        {
                                            label: 'Nadi',
                                            widget: 'choicesjs',
                                            placeholder: 'Select',
                                            tableView: true,
                                            data: {
                                                values: this.nadi
                                            },
                                            selectThreshold: 0.3,
                                            key: 'nadi',
                                            type: 'select',
                                            indexeddb: {
                                                filter: {}
                                            },
                                            input: true,
                                            hideOnChildrenHidden: false
                                        },
                                        
                                    ],
                                    width: 6,
                                    offset: 0,
                                    push: 0,
                                    pull: 0,
                                    size: 'md'
                                }
                            ],
                            key: 'columns4',
                            type: 'columns',
                            input: false,
                            tableView: false
                        }
                    ]
                },
                {
                    title: 'Physical Attributes',
                    collapsible: false,
                    key: 'physicalAttributes',
                    type: 'panel',
                    label: 'Panel',
                    input: false,
                    tableView: false,
                    components: [
                        {
                            label: 'Columns',
                            columns: [
                                {
                                    components: [
                                        {
                                            label: 'Height',
                                            widget: 'choicesjs',
                                            placeholder: 'Select',
                                            tableView: true,
                                            data: {
                                                values: this.height
                                            },
                                            selectThreshold: 0.3,
                                            validate: {
                                                required: true
                                            },
                                            key: 'height',
                                            type: 'select',
                                            indexeddb: {
                                                filter: {}
                                            },
                                            input: true,
                                            hideOnChildrenHidden: false
                                        },
                                        {
                                            label: 'Blood Group',
                                            widget: 'choicesjs',
                                            placeholder: 'Blood Group',
                                            tableView: true,
                                            data: {
                                                values: this.bloodGroup
                                            },
                                            selectThreshold: 0.3,
                                            validate: {
                                                required: true
                                            },
                                            key: 'blood_Group',
                                            type: 'select',
                                            indexeddb: {
                                                filter: {}
                                            },
                                            input: true,
                                            hideOnChildrenHidden: false
                                        },
                                        {
                                            label: 'Physical Disability',
                                            labelPosition: 'left-left',
                                            optionsLabelPosition: 'right',
                                            inline: false,
                                            tableView: false,
                                            values: [
                                                {
                                                    label: 'Yes',
                                                    value: 'yes',
                                                    shortcut: ''
                                                },
                                                {
                                                    label: 'No',
                                                    value: 'no',
                                                    shortcut: ''
                                                }
                                            ],
                                            validate: {
                                                required: true
                                            },
                                            key: 'physical_Disability',
                                            type: 'radio',
                                            input: true,
                                            hideOnChildrenHidden: false
                                        }
                                        
                                    ],
                                    width: 6,
                                    offset: 0,
                                    push: 0,
                                    pull: 0,
                                    size: 'md'
                                },
                                {
                                    components: [
                                        {
                                            label: 'Weight',
                                            widget: 'choicesjs',
                                            placeholder: 'Select',
                                            tableView: true,
                                            data: {
                                                values: this.weight
                                            },
                                            selectThreshold: 0.3,
                                            validate: {
                                                required: true
                                            },
                                            key: 'weight',
                                            type: 'select',
                                            indexeddb: {
                                                filter: {}
                                            },
                                            input: true,
                                            hideOnChildrenHidden: false
                                        },
                                        {
                                            label: 'Complexion',
                                            widget: 'choicesjs',
                                            placeholder: 'Select',
                                            tableView: true,
                                            data: {
                                                values: this.complexion
                                            },
                                            selectThreshold: 0.3,
                                            validate: {
                                                required: true
                                            },
                                            key: 'complexion',
                                            type: 'select',
                                            indexeddb: {
                                                filter: {}
                                            },
                                            input: true,
                                            hideOnChildrenHidden: false
                                        },

                                        {
                                            label: 'If Physical Disability,Please specify it',
                                            tableView: true,
                                            key: 'mention_Physical_Disability',
                                            type: 'textfield',
                                            input: true,
                                            hideOnChildrenHidden: false
                                        }
                                    ],
                                    width: 6,
                                    offset: 0,
                                    push: 0,
                                    pull: 0,
                                    size: 'md'
                                }
                            ],
                            key: 'columns5',
                            type: 'columns',
                            input: false,
                            tableView: false
                        },
                        {
                            title: 'Expectation',
                            collapsible: false,
                            key: 'expectation',
                            type: 'panel',
                            label: 'Panel',
                            input: false,
                            tableView: false,
                            components: [
                                {
                                    label: 'Columns',
                                    columns: [
                                        {
                                            components: [
                                                {
                                                    label: 'Education',
                                                    tableView: true,
                                                    key: 'education_Expectation',
                                                    type: 'textfield',
                                                    input: true,
                                                    hideOnChildrenHidden: false
                                                },
                                                {
                                                    label: 'Annual Income',
                                                    tableView: true,
                                                    key: 'annual_Income_Expectation',
                                                    type: 'textfield',
                                                    input: true,
                                                    hideOnChildrenHidden: false
                                                },
                                                {
                                                    label: 'City Priority',
                                                    tableView: true,
                                                    key: 'city_Priority_Expectation',
                                                    type: 'textfield',
                                                    input: true,
                                                    hideOnChildrenHidden: false
                                                }
                                            ],
                                            width: 6,
                                            offset: 0,
                                            push: 0,
                                            pull: 0,
                                            size: 'md'
                                        },
                                        {
                                            components: [
                                                {
                                                    label: 'Job / Business',
                                                    tableView: true,
                                                    key: 'job_Expectation',
                                                    type: 'textfield',
                                                    input: true,
                                                    hideOnChildrenHidden: false
                                                },
                                                {
                                                    label: 'Age Difference',
                                                    tableView: true,
                                                    key: 'age_Difference_Expectation',
                                                    type: 'textfield',
                                                    input: true,
                                                    hideOnChildrenHidden: false
                                                },
                                                {
                                                    label: 'Other Expectation',
                                                    tableView: true,
                                                    key: 'other_Expectation',
                                                    type: 'textfield',
                                                    input: true,
                                                    hideOnChildrenHidden: false
                                                },
                                                {
                                                    label: 'Select',
                                                    widget: 'choicesjs',
                                                    disabled: true,
                                                    tableView: true,
                                                    data: {
                                                        values: [
                                                            {
                                                                label: 'USER',
                                                                value: 'USER'
                                                            }
                                                        ]
                                                    },
                                                    selectThreshold: 0.3,
                                                    key: 'role',
                                                    type: 'select',
                                                    indexeddb: {
                                                        filter: {}
                                                    },
                                                    input: true,
                                                    defaultValue: 'USER'
                                                },
                                            ],
                                            width: 6,
                                            offset: 0,
                                            push: 0,
                                            pull: 0,
                                            size: 'md'
                                        }
                                    ],
                                    key: 'columns1',
                                    type: 'columns',
                                    input: false,
                                    tableView: false
                                }
                            ]
                        }
                    ],
                    hideOnChildrenHidden: false
                },
                 
            ]
            ,
        }
    }

    validateForm(submission: any, callback: any): void {
        // tslint:disable-next-line:no-null-keyword
        callback(null, submission);
    }

    // submitForm(submission: any): void {
    //     console.log(submission);
    //     if (this.data && this.data['id']) {
    //         this.ourProductsServiceService.editOurProducts(submission, this.data['id'])
    //             .subscribe(result => {
    //                 console.log(result);
    //             }, err => {
    //                 alert(err);
    //             });
    //     } else {
    //         this.ourProductsServiceService.OurProducts(submission)
    //             .subscribe(result => {
    //                 console.log(result);
    //             }, err => {
    //                 alert(err);
    //             });
    //     }
    // }

    cleanup(): void {
        throw new Error('Method not implemented.');
    }



}


