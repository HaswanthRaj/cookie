const Discord = require("discord.js");
const regex = /[!*();,:@&=+$.\/?%#[\]]/g;
module.exports= {
    name: "language",
    category : "info",
run: (client, message, [args, ...words])=>{
   

    //Commented langs just translate to english
    let langs = {
        'af': 'Afrikaans',
        'sq': 'Albanian',
        'am': 'Amharic',
        'ar': 'Arabic',
        'hy': 'Armenian',
        'az': 'Azerbaijani',
        'eu': 'Basque',
        'be': 'Belarusian',
        'bn': 'Bengali',
        'bs': 'Bosnian',
        'bg': 'Bulgarian',
        'my': 'Burmese',
        'ca': 'Catalan',
        'ny': 'Chichewa (Chewa, Nyanja)',
        'zh': 'Chinese',
        'hr': 'Croatian',
        'cs': 'Czech',
        'da': 'Danish',
        'nl': 'Dutch',
        'en': 'English',
        'eo': 'Esperanto',
        'et': 'Estonian',
        'fi': 'Finnish',
        'fr': 'French',
        'gl': 'Galician',
        'gd': 'Gaelic (Scottish)',
        'ka': 'Georgian',
        'de': 'German',
        'el': 'Greek',
    };
    let langs2={
        'gu': 'Gujarati',
        'ht': 'Haitian Creole',
        'ha': 'Hausa',
        'he': 'Hebrew',
        'hi': 'Hindi',
        'hu': 'Hungarian',
        'is': 'Icelandic',
        'ig': 'Igbo',
        'id': 'Indonesian',
        'in': 'Indonesian',
        'ga': 'Irish',
        'it': 'Italian',
        'ja': 'Japanese',
        'jv': 'Javanese',
        'kn': 'Kannada',
        'kk': 'Kazakh',
        'km': 'Khmer',
        'ky': 'Kyrgyz',
        'ko': 'Korean',
        'ku': 'Kurdish',
        'lo': 'Lao',
        'la': 'Latin',
        'lv': 'Latvian (Lettish)',
        'lt': 'Lithuanian',
        'lg': 'Luxembourgish',
        'mk': 'Macedonian',
        'mg': 'Malagasy',
        'ms': 'Malay',
        'ml': 'Malayalam',
        'mt': 'Maltese',
        'mi': 'Maori',
        'mr': 'Marathi',
        'mh': 'Marshallese',
        'mo': 'Moldavian',
        'mn': 'Mongolian',
        'ne': 'Nepali',
        'no': 'Norwegian',
        'nb': 'Norwegian bokmål',
        'nn': 'Norwegian nynorsk',
        'ps': 'Pashto (Pushto)',
    };
    let langs3 = {
        'fa': 'Persian (Farsi)',
        'pl': 'Polish',
        'pt': 'Portuguese',
        'pa': 'Punjabi (Eastern)',
        'ro': 'Romanian',
        'ru': 'Russian',
        'sm': 'Samoan',
        'sr': 'Serbian',
        'sh': 'Serbo-Croatian',
        'st': 'Sesotho',
        'sn': 'Shona',
        'sd': 'Sindhi',
        'si': 'Sinhalese',
        'sk': 'Slovak',
        'sl': 'Slovenian',
        'so': 'Somali',
        'es': 'Spanish',
        'su': 'Sundanese',
        'sw': 'Swahili (Kiswahili)',
        'sv': 'Swedish',
        'tl': 'Tagalog',
        'tg': 'Tajik',
        'ta': 'Tamil',
        'te': 'Telugu',
        'th': 'Thai',
        'tr': 'Turkish',
        'uk': 'Ukrainian',
        'ur': 'Urdu',
        'uz': 'Uzbek',
        'vi': 'Vietnamese',
        'cy': 'Welsh',
        'fy': 'Western Frisian',
        'xh': 'Xhosa',
        'yi': 'Yiddish',
        'ji': 'Yiddish',
        'yo': 'Yoruba',
        'zu': 'Zulu',
    };

    if (args == 'list') {

        let langEntries = Object.entries(langs);
        let listOfDLangs = ``;

        for (const [short, long] of langEntries) {
            listOfDLangs += `${long} - ${short}\n`;
        }

        let embed1 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('List of languages Loney can translate:')
            .setDescription(listOfDLangs)
            .addField('How to use: ', '`kid translate lang1-lang2 <word>`')
            .setFooter('Type kid translation list2 to next page')
            .setTimestamp();

        message.channel.send(embed1);
        return;
    }
else if(args == 'list2'){
    let langEntries2 = Object.entries(langs2);
        let listOfDLangs2 = ``;

        for (const [short, long] of langEntries2) {
            listOfDLangs2 += `${long} - ${short}\n`;
        }

        let embed2 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('List of languages Loney can translate:')
            .setDescription(listOfDLangs2)
            .addField('How to use: ', '`kid translate lang1-lang2 <word>`')
            .setFooter('Type kid translation list3 to next page')
            .setTimestamp();

        message.channel.send(embed2);
        return;
}else if (args == 'list3'){
    let langEntries3 = Object.entries(langs3);
        let listOfDLangs3 = ``;

        for (const [short, long] of langEntries3) {
            listOfDLangs3 += `${long} - ${short}\n`;
        }

        let embed3 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('List of languages Loney can translate:')
            .setDescription(listOfDLangs3)
            .addField('How to use: ', '`kid translate lang1-lang2 <word>`')
            .setTimestamp();

        message.channel.send(embed3);
        return;
}}}