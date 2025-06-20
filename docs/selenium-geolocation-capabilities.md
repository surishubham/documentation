---
id: selenium-geolocation-capabilities
title: Selenium Testing from different Geolocations
hide_title: false
sidebar_label: IP Geolocation
description: Selenium Geolocation capabilities documentation provides you the insights about the countries and region with their timezone LambdaTest supports so that you can test your application in that particular timezone.
keywords:
  - lambdatest automation
  - selenium automation grid
  - selenium geoloction
  - timezone
url: https://www.lambdatest.com/support/docs/selenium-geolocation-capabilities/
site_name: LambdaTest
slug: selenium-geolocation-capabilities/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Other Capabilities",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Selenium Geo location",
          "item": "https://www.lambdatest.com/support/docs/selenium-geolocation-capabilities/"
        }]
      })
    }}
></script>

LambdaTest allows you to run your test from different geographies across the world.

<div className="ytframe"> 
<div className="youtube" data-embed="n71MfNyDF5E">
    <div className="play-button"></div>
</div>
</div>

:::warning NOTE
You cannot perform Geolocation testing with locally hosted web applications using LambdaTest Tunnel in a single test case. If you wish to perform both, then you can leverage parallel testing to run two tests simultaneously, one for Geolocation and the other for LambdaTest Tunnel.
:::


| Key | Values | Capability Description  | Alias | Value Type | Example | Possible Errors |
|-----|--------|-------------------------|-------|------------|---------|-----------------|
| `geoLocation` | Example: US | This capability helps you to perform Selenium automation testing from different countries. <br/>`capabilities.setCapability("geoLocation","US");` |geo | String |`capabilities.setCapability("geoLocation","US");`|Case Sensitive <br/>Invalid location error


> **NOTE :** You can verify whether your geolocation IP address is working or not via [MaxMind's GeoIP Web Services](https://www.maxmind.com/en/geoip-web-services-demo).

You can perform Selenium automation testing from the below-listed countries.

| Country | Country Codes | 
|---------|---------------|
| Albania         | "AL" | 
| Andorra         | "AD" | 
| Argentina       | "AR" | 
| Armenia         | "AM" | 
| Australia       | "AU" | 
| Austria         | "AT" | 
| Azerbaijan      | "AZ" | 
| Bahrain         | "BH" | 
| Bangladesh      | "BD" | 
| Belarus         | "BY" | 
| Belgium         | "BE" | 
| Bosnia and Herzegovina| "BA" | 
| Brazil          | "BR" | 
| Bulgaria        | "BG" | 
| Cambodia        | "KH" | 
| Canada          | "CA" | 
| Chile           | "CL" | 
| China           | "CN" | 
| Colombia        | "CO" | 
| Costa Rica      | "CR" | 
| Croatia         | "HR" | 
| Curacao         | "CW" | 
| Cyprus          | "CY" | 
| Czech Republic  | "CZ" | 
| Denmark         | "DK" | 
| Dominican Republic| "DO" | 
| Ecuador         | "EC" | 
| Egypt           | "EG" | 
| El Salvador     | "SV" | 
| Estonia         | "EE" | 
| Finland         | "FI" | 
| France          | "FR" | 
| Georgia         | "GE" | 
| Germany         | "DE" | 
| Greece          | "GR" | 
| Guatemala       | "GT" | 
| Honduras        | "HN" | 
| Hong Kong       | "HK" | 
| Hungary         | "HU" | 
| Iceland         | "IS" | 
| India           | "IN" | 
| Indonesia       | "ID" | 
| Ireland         | "IE" | 
| Isle of Man     | "IM" | 
| Israel          | "IL" | 
| Italy           | "IT" | 
| Jamaica         | "JM" | 
| Japan           | "JP" | 
| Jordan          | "JO" | 
| Kazakhstan      | "KZ" | 
| Kenya           | "KE" | 
| Korea           | "KR" | 
| Kuwait          | "KW" | 
| Kyrgyzstan      | "KG" | 
| Latvia          | "LV" | 
| Lebanon         | "LB" | 
| Lithuania       | "LT" | 
| Luxembourg      | "LU" | 
| Malaysia        | "MY" | 
| Malta           | "MT" | 
| Mexico          | "MX" | 
| Moldova         | "MD" | 
| Mongolia        | "MN" | 
| Morocco         | "MA" | 
| Netherlands     | "NL" | 
| New Zealand     | "NZ" | 
| Nicaragua       | "NI" | 
| Nigeria         | "NG" | 
| Norway          | "NO" | 
| Oman            | "OM" | 
| Pakistan        | "PK" | 
| Panama          | "PA" | 
| Paraguay        | "PY" | 
| Peru            | "PE" | 
| Philippines     | "PH" | 
| Poland          | "PL" | 
| Portugal        | "PT" | 
| Puerto Rico     | "PR" | 
| Qatar           | "QA" | 
| Romania         | "RO" | 
| Russian Federation| "RU" | 
| Saudi Arabia    | "SA" | 
| Serbia          | "RS" | 
| Singapore       | "SG" | 
| Slovakia        | "SK" | 
| Slovenia        | "SI" | 
| South Africa    | "ZA" | 
| Spain           | "ES" | 
| Sweden          | "SE" | 
| Switzerland     | "CH" | 
| Taiwan          | "TW" | 
| Tanzania        | "TZ" | 
| Thailand        | "TH" | 
| Tunisia         | "TN" | 
| Turkey          | "TR" | 
| Ukraine         | "UA" | 
| United Arab Emirates| "AE" | 
| United Kingdom  | "GB" | 
| United States   | "US" | 
| Uruguay         | "UY" | 
| Uzbekistan      | "UZ" | 
| Venezuela       | "VE" | 
| Vietnam         | "VN" | 

## List of Supported Timezones

Following are the list of supported Timezones for automation testing on the LambdaTest platform.

| City           | Timezone                                                       |
| -------------- | -------------------------------------------------------------- |
| Abidjan        | {"Africa/Abidjan", "Greenwich Standard Time"},                 |
| Accra          | {"Africa/Accra", "Greenwich Standard Time"},                   |
| Addis_Ababa    | {"Africa/Addis_Ababa", "E. Africa Standard Time"},             |
| Algiers        | {"Africa/Algiers", "W. Central Africa Standard Time"},         |
| Asmara         | {"Africa/Asmara", "nan"},                                      |
| Bamako         | {"Africa/Bamako", "Greenwich Standard Time"},                  |
| Bangui         | {"Africa/Bangui", "W. Central Africa Standard Time"},          |
| Banjul         | {"Africa/Banjul", "Greenwich Standard Time"},                  |
| Bissau         | {"Africa/Bissau", "Greenwich Standard Time"},                  |
| Blantyre       | {"Africa/Blantyre", "South Africa Standard Time"},             |
| Brazzaville    | {"Africa/Brazzaville", "W. Central Africa Standard Time"},     |
| Bujumbura      | {"Africa/Bujumbura", "South Africa Standard Time"},            |
| Cairo          | {"Africa/Cairo", "Egypt Standard Time"},                       |
| Casablanca     | {"Africa/Casablanca", "Morocco Standard Time"},                |
| Ceuta          | {"Africa/Ceuta", "Romance Standard Time"},                     |
| Conakry        | {"Africa/Conakry", "Greenwich Standard Time"},                 |
| Dakar          | {"Africa/Dakar", "Greenwich Standard Time"},                   |
| Dar_es_Salaam  | {"Africa/Dar_es_Salaam", "E. Africa Standard Time"},           |
| Djibouti       | {"Africa/Djibouti", "E. Africa Standard Time"},                |
| Douala         | {"Africa/Douala", "W. Central Africa Standard Time"},          |
| El_Aaiun       | {"Africa/El_Aaiun", "Morocco Standard Time"},                  |
| Freetown       | {"Africa/Freetown", "Greenwich Standard Time"},                |
| Gaborone       | {"Africa/Gaborone", "South Africa Standard Time"},             |
| Harare         | {"Africa/Harare", "South Africa Standard Time"},               |
| Johannesburg   | {"Africa/Johannesburg", "South Africa Standard Time"},         |
| Juba           | {"Africa/Juba", "E. Africa Standard Time"},                    |
| Kampala        | {"Africa/Kampala", "E. Africa Standard Time"},                 |
| Khartoum       | {"Africa/Khartoum", "E. Africa Standard Time"},                |
| Kigali         | {"Africa/Kigali", "South Africa Standard Time"},               |
| Kinshasa       | {"Africa/Kinshasa", "W. Central Africa Standard Time"},        |
| Lagos          | {"Africa/Lagos", "W. Central Africa Standard Time"},           |
| Libreville     | {"Africa/Libreville", "W. Central Africa Standard Time"},      |
| Lome           | {"Africa/Lome", "Greenwich Standard Time"},                    |
| Luanda         | {"Africa/Luanda", "W. Central Africa Standard Time"},          |
| Lubumbashi     | {"Africa/Lubumbashi", "South Africa Standard Time"},           |
| Lusaka         | {"Africa/Lusaka", "South Africa Standard Time"},               |
| Malabo         | {"Africa/Malabo", "W. Central Africa Standard Time"},          |
| Maputo         | {"Africa/Maputo", "South Africa Standard Time"},               |
| Maseru         | {"Africa/Maseru", "South Africa Standard Time"},               |
| Mbabane        | {"Africa/Mbabane", "South Africa Standard Time"},              |
| Mogadishu      | {"Africa/Mogadishu", "E. Africa Standard Time"},               |
| Monrovia       | {"Africa/Monrovia", "Greenwich Standard Time"},                |
| Nairobi        | {"Africa/Nairobi", "E. Africa Standard Time"},                 |
| Ndjamena       | {"Africa/Ndjamena", "W. Central Africa Standard Time"},        |
| Niamey         | {"Africa/Niamey", "W. Central Africa Standard Time"},          |
| Nouakchott     | {"Africa/Nouakchott", "Greenwich Standard Time"},              |
| Ouagadougou    | {"Africa/Ouagadougou", "Greenwich Standard Time"},             |
| Porto-Novo     | {"Africa/Porto-Novo", "W. Central Africa Standard Time"},      |
| Sao_Tome       | {"Africa/Sao_Tome", "Greenwich Standard Time"},                |
| Tripoli        | {"Africa/Tripoli", "Libya Standard Time"},                     |
| Tunis          | {"Africa/Tunis", "W. Central Africa Standard Time"},           |
| Windhoek       | {"Africa/Windhoek", "Namibia Standard Time"},                  |
| Adak           | {"America/Adak", "nan"},                                       |
| Anchorage      | {"America/Anchorage", "Alaskan Standard Time"},                |
| Anguilla       | {"America/Anguilla", "SA Western Standard Time"},              |
| Antigua        | {"America/Antigua", "SA Western Standard Time"},               |
| Araguaina      | {"America/Araguaina", "SA Eastern Standard Time"},             |
| Buenos_Aires   | {"America/Argentina/Buenos_Aires", "nan"},                     |
| Catamarca      | {"America/Argentina/Catamarca", "nan"},                        |
| Cordoba        | {"America/Argentina/Cordoba", "nan"},                          |
| Jujuy          | {"America/Argentina/Jujuy", "nan"},                            |
| La_Rioja       | {"America/Argentina/La_Rioja", "Argentina Standard Time"},     |
| Mendoza        | {"America/Argentina/Mendoza", "nan"},                          |
| Rio_Gallegos   | {"America/Argentina/Rio_Gallegos", "Argentina Standard Time"}, |
| Salta          | {"America/Argentina/Salta", "Argentina Standard Time"},        |
| San_Juan       | {"America/Argentina/San_Juan", "Argentina Standard Time"},     |
| San_Luis       | {"America/Argentina/San_Luis", "Argentina Standard Time"},     |
| Tucuman        | {"America/Argentina/Tucuman", "Argentina Standard Time"},      |
| Ushuaia        | {"America/Argentina/Ushuaia", "Argentina Standard Time"},      |
| Aruba          | {"America/Aruba", "SA Western Standard Time"},                 |
| Asuncion       | {"America/Asuncion", "Paraguay Standard Time"},                |
| Atikokan       | {"America/Atikokan", "nan"},                                   |
| Bahia          | {"America/Bahia", "Bahia Standard Time"},                      |
| Bahia_Banderas | {"America/Bahia_Banderas", "Central Standard Time (Mexico)"},  |
| Barbados       | {"America/Barbados", "SA Western Standard Time"},              |
| Belem          | {"America/Belem", "SA Eastern Standard Time"},                 |
| Belize         | {"America/Belize", "Central America Standard Time"},           |
| Blanc-Sablon   | {"America/Blanc-Sablon", "SA Western Standard Time"},          |
| Boa_Vista      | {"America/Boa_Vista", "SA Western Standard Time"},             |
| Bogota         | {"America/Bogota", "SA Pacific Standard Time"},                |
| Boise          | {"America/Boise", "Mountain Standard Time"},                   |
| Cambridge_Bay  | {"America/Cambridge_Bay", "Mountain Standard Time"},           |
| Campo_Grande   | {"America/Campo_Grande", "Central Brazilian Standard Time"},   |
| Cancun         | {"America/Cancun", "Eastern Standard Time (Mexico)"},          |
| Caracas        | {"America/Caracas", "Venezuela Standard Time"},                |
| Cayenne        | {"America/Cayenne", "SA Eastern Standard Time"},               |
| Cayman         | {"America/Cayman", "SA Pacific Standard Time"},                |
| Chicago        | {"America/Chicago", "Central Standard Time"},                  |
| Chihuahua      | {"America/Chihuahua", "Mountain Standard Time (Mexico)"},      |
| Costa_Rica     | {"America/Costa_Rica", "Central America Standard Time"},       |
| Creston        | {"America/Creston", "US Mountain Standard Time"},              |
| Cuiaba         | {"America/Cuiaba", "Central Brazilian Standard Time"},         |
| Curacao        | {"America/Curacao", "SA Western Standard Time"},               |
| Danmarkshavn   | {"America/Danmarkshavn", "UTC"},                               |
| Dawson         | {"America/Dawson", "Pacific Standard Time"},                   |
| Dawson_Creek   | {"America/Dawson_Creek", "US Mountain Standard Time"},         |
| Denver         | {"America/Denver", "Mountain Standard Time"},                  |
| Detroit        | {"America/Detroit", "Eastern Standard Time"},                  |
| Dominica       | {"America/Dominica", "SA Western Standard Time"},              |
| Edmonton       | {"America/Edmonton", "Mountain Standard Time"},                |
| Eirunepe       | {"America/Eirunepe", "SA Pacific Standard Time"},              |
| El_Salvador    | {"America/El_Salvador", "Central America Standard Time"},      |
| Fortaleza      | {"America/Fortaleza", "SA Eastern Standard Time"},             |
| Glace_Bay      | {"America/Glace_Bay", "Atlantic Standard Time"},               |
| Godthab        | {"America/Godthab", "Greenland Standard Time"},                |
| Goose_Bay      | {"America/Goose_Bay", "Atlantic Standard Time"},               |
| Grand_Turk     | {"America/Grand_Turk", "SA Western Standard Time"},            |
| Grenada        | {"America/Grenada", "SA Western Standard Time"},               |
| Guadeloupe     | {"America/Guadeloupe", "SA Western Standard Time"},            |
| Guatemala      | {"America/Guatemala", "Central America Standard Time"},        |
| Guayaquil      | {"America/Guayaquil", "SA Pacific Standard Time"},             |
| Guyana         | {"America/Guyana", "SA Western Standard Time"},                |
| Halifax        | {"America/Halifax", "Atlantic Standard Time"},                 |
| Havana         | {"America/Havana", "Eastern Standard Time"},                   |
| Hermosillo     | {"America/Hermosillo", "US Mountain Standard Time"},           |
| Indianapolis   | {"America/Indiana/Indianapolis", "nan"},                       |
| Knox           | {"America/Indiana/Knox", "Central Standard Time"},             |
| Marengo        | {"America/Indiana/Marengo", "US Eastern Standard Time"},       |
| Petersburg     | {"America/Indiana/Petersburg", "Eastern Standard Time"},       |
| Tell_City      | {"America/Indiana/Tell_City", "Central Standard Time"},        |
| Vevay          | {"America/Indiana/Vevay", "US Eastern Standard Time"},         |
| Vincennes      | {"America/Indiana/Vincennes", "Eastern Standard Time"},        |
| Winamac        | {"America/Indiana/Winamac", "Eastern Standard Time"},          |
| Inuvik         | {"America/Inuvik", "Mountain Standard Time"},                  |
| Iqaluit        | {"America/Iqaluit", "Eastern Standard Time"},                  |
| Jamaica        | {"America/Jamaica", "SA Pacific Standard Time"},               |
| Juneau         | {"America/Juneau", "Alaskan Standard Time"},                   |
| Louisville     | {"America/Kentucky/Louisville", "nan"},                        |
| Monticello     | {"America/Kentucky/Monticello", "Eastern Standard Time"},      |
| Kralendijk     | {"America/Kralendijk", "SA Western Standard Time"},            |
| La_Paz         | {"America/La_Paz", "SA Western Standard Time"},                |
| Lima           | {"America/Lima", "SA Pacific Standard Time"},                  |
| Los_Angeles    | {"America/Los_Angeles", "Pacific Standard Time"},              |
| Lower_Princes  | {"America/Lower_Princes", "SA Western Standard Time"},         |
| Maceio         | {"America/Maceio", "SA Eastern Standard Time"},                |
| Managua        | {"America/Managua", "Central America Standard Time"},          |
| Manaus         | {"America/Manaus", "SA Western Standard Time"},                |
| Marigot        | {"America/Marigot", "SA Western Standard Time"},               |
| Martinique     | {"America/Martinique", "SA Western Standard Time"},            |
| Matamoros      | {"America/Matamoros", "Central Standard Time"},                |
| Mazatlan       | {"America/Mazatlan", "Mountain Standard Time (Mexico)"},       |
| Menominee      | {"America/Menominee", "Central Standard Time"},                |
| Merida         | {"America/Merida", "Central Standard Time (Mexico)"},          |
| Metlakatla     | {"America/Metlakatla", "nan"},                                 |
| Mexico_City    | {"America/Mexico_City", "Central Standard Time (Mexico)"},     |
| Miquelon       | {"America/Miquelon", "nan"},                                   |
| Moncton        | {"America/Moncton", "Atlantic Standard Time"},                 |
| Monterrey      | {"America/Monterrey", "Central Standard Time (Mexico)"},       |
| Montevideo     | {"America/Montevideo", "Montevideo Standard Time"},            |
| Montreal       | {"America/Montreal", "Eastern Standard Time"},                 |
| Montserrat     | {"America/Montserrat", "SA Western Standard Time"},            |
| Nassau         | {"America/Nassau", "Eastern Standard Time"},                   |
| New_York       | {"America/New_York", "Eastern Standard Time"},                 |
| Nipigon        | {"America/Nipigon", "Eastern Standard Time"},                  |
| Nome           | {"America/Nome", "Alaskan Standard Time"},                     |
| Noronha        | {"America/Noronha", "UTC-02"},                                 |
| Beulah         | {"America/North_Dakota/Beulah", "Central Standard Time"},      |
| Center         | {"America/North_Dakota/Center", "Central Standard Time"},      |
| New_Salem      | {"America/North_Dakota/New_Salem", "Central Standard Time"},   |
| Ojinaga        | {"America/Ojinaga", "Mountain Standard Time"},                 |
| Panama         | {"America/Panama", "SA Pacific Standard Time"},                |
| Pangnirtung    | {"America/Pangnirtung", "Eastern Standard Time"},              |
| Paramaribo     | {"America/Paramaribo", "SA Eastern Standard Time"},            |
| Phoenix        | {"America/Phoenix", "US Mountain Standard Time"},              |
| Port-au-Prince | {"America/Port-au-Prince", "Eastern Standard Time"},           |
| Port_of_Spain  | {"America/Port_of_Spain", "SA Western Standard Time"},         |
| Porto_Velho    | {"America/Porto_Velho", "SA Western Standard Time"},           |
| Puerto_Rico    | {"America/Puerto_Rico", "SA Western Standard Time"},           |
| Rainy_River    | {"America/Rainy_River", "Central Standard Time"},              |
| Rankin_Inlet   | {"America/Rankin_Inlet", "Central Standard Time"},             |
| Recife         | {"America/Recife", "SA Eastern Standard Time"},                |
| Regina         | {"America/Regina", "Canada Central Standard Time"},            |
| Resolute       | {"America/Resolute", "Central Standard Time"},                 |
| Rio_Branco     | {"America/Rio_Branco", "SA Pacific Standard Time"},            |
| Santa_Isabel   | {"America/Santa_Isabel", "Pacific Standard Time (Mexico)"},    |
| Santarem       | {"America/Santarem", "SA Eastern Standard Time"},              |
| Santiago       | {"America/Santiago", "Pacific SA Standard Time"},              |
| Santo_Domingo  | {"America/Santo_Domingo", "SA Western Standard Time"},         |
| Sao_Paulo      | {"America/Sao_Paulo", "E. South America Standard Time"},       |
| Scoresbysund   | {"America/Scoresbysund", "Azores Standard Time"},              |
| Shiprock       | {"America/Shiprock", "nan"},                                   |
| Sitka          | {"America/Sitka", "Alaskan Standard Time"},                    |
| St_Barthelemy  | {"America/St_Barthelemy", "SA Western Standard Time"},         |
| St_Johns       | {"America/St_Johns", "Newfoundland Standard Time"},            |
| St_Kitts       | {"America/St_Kitts", "SA Western Standard Time"},              |
| St_Lucia       | {"America/St_Lucia", "SA Western Standard Time"},              |
| St_Thomas      | {"America/St_Thomas", "SA Western Standard Time"},             |
| St_Vincent     | {"America/St_Vincent", "SA Western Standard Time"},            |
| Swift_Current  | {"America/Swift_Current", "Canada Central Standard Time"},     |
| Tegucigalpa    | {"America/Tegucigalpa", "Central America Standard Time"},      |
| Thule          | {"America/Thule", "Atlantic Standard Time"},                   |
| Thunder_Bay    | {"America/Thunder_Bay", "Eastern Standard Time"},              |
| Tijuana        | {"America/Tijuana", "Pacific Standard Time"},                  |
| Toronto        | {"America/Toronto", "Eastern Standard Time"},                  |
| Tortola        | {"America/Tortola", "SA Western Standard Time"},               |
| Vancouver      | {"America/Vancouver", "Pacific Standard Time"},                |
| Whitehorse     | {"America/Whitehorse", "Pacific Standard Time"},               |
| Winnipeg       | {"America/Winnipeg", "Central Standard Time"},                 |
| Yakutat        | {"America/Yakutat", "Alaskan Standard Time"},                  |
| Yellowknife    | {"America/Yellowknife", "Mountain Standard Time"},             |
| Casey          | {"Antarctica/Casey", "W. Australia Standard Time"},            |
| Davis          | {"Antarctica/Davis", "SE Asia Standard Time"},                 |
| DumontDUrville | {"Antarctica/DumontDUrville", "West Pacific Standard Time"},   |
| Macquarie      | {"Antarctica/Macquarie", "Central Pacific Standard Time"},     |
| Mawson         | {"Antarctica/Mawson", "West Asia Standard Time"},              |
| McMurdo        | {"Antarctica/McMurdo", "New Zealand Standard Time"},           |
| Palmer         | {"Antarctica/Palmer", "Pacific SA Standard Time"},             |
| Rothera        | {"Antarctica/Rothera", "SA Eastern Standard Time"},            |
| South_Pole     | {"Antarctica/South_Pole", "nan"},                              |
| Syowa          | {"Antarctica/Syowa", "E. Africa Standard Time"},               |
| Troll          | {"Antarctica/Troll", "nan"},                                   |
| Vostok         | {"Antarctica/Vostok", "Central Asia Standard Time"},           |
| Longyearbyen   | {"Arctic/Longyearbyen", "W. Europe Standard Time"},            |
| Aden           | {"Asia/Aden", "Arab Standard Time"},                           |
| Almaty         | {"Asia/Almaty", "Central Asia Standard Time"},                 |
| Amman          | {"Asia/Amman", "Jordan Standard Time"},                        |
| Anadyr         | {"Asia/Anadyr", "Russia Time Zone 11"},                        |
| Aqtau          | {"Asia/Aqtau", "West Asia Standard Time"},                     |
| Aqtobe         | {"Asia/Aqtobe", "West Asia Standard Time"},                    |
| Ashgabat       | {"Asia/Ashgabat", "West Asia Standard Time"},                  |
| Baghdad        | {"Asia/Baghdad", "Arabic Standard Time"},                      |
| Bahrain        | {"Asia/Bahrain", "Arab Standard Time"},                        |
| Baku           | {"Asia/Baku", "Azerbaijan Standard Time"},                     |
| Bangkok        | {"Asia/Bangkok", "SE Asia Standard Time"},                     |
| Beirut         | {"Asia/Beirut", "Middle East Standard Time"},                  |
| Bishkek        | {"Asia/Bishkek", "Central Asia Standard Time"},                |
| Brunei         | {"Asia/Brunei", "Singapore Standard Time"},                    |
| Chita          | {"Asia/Chita", "North Asia East Standard Time"},               |
| Choibalsan     | {"Asia/Choibalsan", "Ulaanbaatar Standard Time"},              |
| Chongqing      | {"Asia/Chongqing", "nan"},                                     |
| Colombo        | {"Asia/Colombo", "Sri Lanka Standard Time"},                   |
| Damascus       | {"Asia/Damascus", "Syria Standard Time"},                      |
| Dhaka          | {"Asia/Dhaka", "Bangladesh Standard Time"},                    |
| Dili           | {"Asia/Dili", "Tokyo Standard Time"},                          |
| Dubai          | {"Asia/Dubai", "Arabian Standard Time"},                       |
| Dushanbe       | {"Asia/Dushanbe", "West Asia Standard Time"},                  |
| Gaza           | {"Asia/Gaza", "nan"},                                          |
| Harbin         | {"Asia/Harbin", "nan"},                                        |
| Hebron         | {"Asia/Hebron", "nan"},                                        |
| Ho_Chi_Minh    | {"Asia/Ho_Chi_Minh", "nan"},                                   |
| Hong_Kong      | {"Asia/Hong_Kong", "China Standard Time"},                     |
| Hovd           | {"Asia/Hovd", "SE Asia Standard Time"},                        |
| Irkutsk        | {"Asia/Irkutsk", "North Asia East Standard Time"},             |
| Jakarta        | {"Asia/Jakarta", "SE Asia Standard Time"},                     |
| Jayapura       | {"Asia/Jayapura", "Tokyo Standard Time"},                      |
| Jerusalem      | {"Asia/Jerusalem", "Israel Standard Time"},                    |
| Kabul          | {"Asia/Kabul", "Afghanistan Standard Time"},                   |
| Kamchatka      | {"Asia/Kamchatka", "Russia Time Zone 11"},                     |
| Karachi        | {"Asia/Karachi", "Pakistan Standard Time"},                    |
| Kashgar        | {"Asia/Kashgar", "nan"},                                       |
| Kathmandu      | {"Asia/Kathmandu", "nan"},                                     |
| Katmandu       | {"Asia/Katmandu", "Nepal Standard Time"},                      |
| Khandyga       | {"Asia/Khandyga", "Yakutsk Standard Time"},                    |
| Kolkata        | {"Asia/Kolkata", "India Standard Time"},                       |
| Krasnoyarsk    | {"Asia/Krasnoyarsk", "North Asia Standard Time"},              |
| Kuala_Lumpur   | {"Asia/Kuala_Lumpur", "Singapore Standard Time"},              |
| Kuching        | {"Asia/Kuching", "Singapore Standard Time"},                   |
| Kuwait         | {"Asia/Kuwait", "Arab Standard Time"},                         |
| Macau          | {"Asia/Macau", "China Standard Time"},                         |
| Magadan        | {"Asia/Magadan", "Magadan Standard Time"},                     |
| Makassar       | {"Asia/Makassar", "Singapore Standard Time"},                  |
| Manila         | {"Asia/Manila", "Singapore Standard Time"},                    |
| Muscat         | {"Asia/Muscat", "Arabian Standard Time"},                      |
| Nicosia        | {"Asia/Nicosia", "GTB Standard Time"},                         |
| Novokuznetsk   | {"Asia/Novokuznetsk", "North Asia Standard Time"},             |
| Novosibirsk    | {"Asia/Novosibirsk", "N. Central Asia Standard Time"},         |
| Omsk           | {"Asia/Omsk", "N. Central Asia Standard Time"},                |
| Oral           | {"Asia/Oral", "West Asia Standard Time"},                      |
| Phnom_Penh     | {"Asia/Phnom_Penh", "SE Asia Standard Time"},                  |
| Pontianak      | {"Asia/Pontianak", "SE Asia Standard Time"},                   |
| Pyongyang      | {"Asia/Pyongyang", "nan"},                                     |
| Qatar          | {"Asia/Qatar", "Arab Standard Time"},                          |
| Qyzylorda      | {"Asia/Qyzylorda", "Central Asia Standard Time"},              |
| Rangoon        | {"Asia/Rangoon", "Myanmar Standard Time"},                     |
| Riyadh         | {"Asia/Riyadh", "Arab Standard Time"},                         |
| Sakhalin       | {"Asia/Sakhalin", "Vladivostok Standard Time"},                |
| Samarkand      | {"Asia/Samarkand", "West Asia Standard Time"},                 |
| Seoul          | {"Asia/Seoul", "Korea Standard Time"},                         |
| Shanghai       | {"Asia/Shanghai", "China Standard Time"},                      |
| Singapore      | {"Asia/Singapore", "Singapore Standard Time"},                 |
| Srednekolymsk  | {"Asia/Srednekolymsk", "Russia Time Zone 10"},                 |
| Taipei         | {"Asia/Taipei", "Taipei Standard Time"},                       |
| Tashkent       | {"Asia/Tashkent", "West Asia Standard Time"},                  |
| Tbilisi        | {"Asia/Tbilisi", "Georgian Standard Time"},                    |
| Tehran         | {"Asia/Tehran", "Iran Standard Time"},                         |
| Thimphu        | {"Asia/Thimphu", "Bangladesh Standard Time"},                  |
| Tokyo          | {"Asia/Tokyo", "Tokyo Standard Time"},                         |
| Ulaanbaatar    | {"Asia/Ulaanbaatar", "Ulaanbaatar Standard Time"},             |
| Urumqi         | {"Asia/Urumqi", "Central Asia Standard Time"},                 |
| Ust-Nera       | {"Asia/Ust-Nera", "Vladivostok Standard Time"},                |
| Vientiane      | {"Asia/Vientiane", "SE Asia Standard Time"},                   |
| Vladivostok    | {"Asia/Vladivostok", "Vladivostok Standard Time"},             |
| Yakutsk        | {"Asia/Yakutsk", "Yakutsk Standard Time"},                     |
| Yekaterinburg  | {"Asia/Yekaterinburg", "Ekaterinburg Standard Time"},          |
| Yerevan        | {"Asia/Yerevan", "Caucasus Standard Time"},                    |
| Azores         | {"Atlantic/Azores", "Azores Standard Time"},                   |
| Bermuda        | {"Atlantic/Bermuda", "Atlantic Standard Time"},                |
| Canary         | {"Atlantic/Canary", "GMT Standard Time"},                      |
| Cape_Verde     | {"Atlantic/Cape_Verde", "Cape Verde Standard Time"},           |
| Faroe          | {"Atlantic/Faroe", "nan"},                                     |
| Madeira        | {"Atlantic/Madeira", "GMT Standard Time"},                     |
| Reykjavik      | {"Atlantic/Reykjavik", "Greenwich Standard Time"},             |
| South_Georgia  | {"Atlantic/South_Georgia", "UTC-02"},                          |
| St_Helena      | {"Atlantic/St_Helena", "Greenwich Standard Time"},             |
| Stanley        | {"Atlantic/Stanley", "SA Eastern Standard Time"},              |
| Adelaide       | {"Australia/Adelaide", "Cen. Australia Standard Time"},        |
| Brisbane       | {"Australia/Brisbane", "E. Australia Standard Time"},          |
| Broken_Hill    | {"Australia/Broken_Hill", "Cen. Australia Standard Time"},     |
| Currie         | {"Australia/Currie", "Tasmania Standard Time"},                |
| Darwin         | {"Australia/Darwin", "AUS Central Standard Time"},             |
| Eucla          | {"Australia/Eucla", "nan"},                                    |
| Hobart         | {"Australia/Hobart", "Tasmania Standard Time"},                |
| Lindeman       | {"Australia/Lindeman", "E. Australia Standard Time"},          |
| Lord_Howe      | {"Australia/Lord_Howe", "nan"},                                |
| Melbourne      | {"Australia/Melbourne", "AUS Eastern Standard Time"},          |
| Perth          | {"Australia/Perth", "W. Australia Standard Time"},             |
| Sydney         | {"Australia/Sydney", "AUS Eastern Standard Time"},             |
| Amsterdam      | {"Europe/Amsterdam", "W. Europe Standard Time"},               |
| Andorra        | {"Europe/Andorra", "W. Europe Standard Time"},                 |
| Athens         | {"Europe/Athens", "GTB Standard Time"},                        |
| Belgrade       | {"Europe/Belgrade", "Central Europe Standard Time"},           |
| Berlin         | {"Europe/Berlin", "W. Europe Standard Time"},                  |
| Bratislava     | {"Europe/Bratislava", "Central Europe Standard Time"},         |
| Brussels       | {"Europe/Brussels", "Romance Standard Time"},                  |
| Bucharest      | {"Europe/Bucharest", "GTB Standard Time"},                     |
| Budapest       | {"Europe/Budapest", "Central Europe Standard Time"},           |
| Busingen       | {"Europe/Busingen", "W. Europe Standard Time"},                |
| Chisinau       | {"Europe/Chisinau", "GTB Standard Time"},                      |
| Copenhagen     | {"Europe/Copenhagen", "Romance Standard Time"},                |
| Dublin         | {"Europe/Dublin", "GMT Standard Time"},                        |
| Gibraltar      | {"Europe/Gibraltar", "W. Europe Standard Time"},               |
| Guernsey       | {"Europe/Guernsey", "GMT Standard Time"},                      |
| Helsinki       | {"Europe/Helsinki", "FLE Standard Time"},                      |
| Isle_of_Man    | {"Europe/Isle_of_Man", "GMT Standard Time"},                   |
| Istanbul       | {"Europe/Istanbul", "Turkey Standard Time"},                   |
| Jersey         | {"Europe/Jersey", "GMT Standard Time"},                        |
| Kaliningrad    | {"Europe/Kaliningrad", "Kaliningrad Standard Time"},           |
| Kiev           | {"Europe/Kiev", "FLE Standard Time"},                          |
| Lisbon         | {"Europe/Lisbon", "GMT Standard Time"},                        |
| Ljubljana      | {"Europe/Ljubljana", "Central Europe Standard Time"},          |
| London         | {"Europe/London", "GMT Standard Time"},                        |
| Luxembourg     | {"Europe/Luxembourg", "W. Europe Standard Time"},              |
| Madrid         | {"Europe/Madrid", "Romance Standard Time"},                    |
| Malta          | {"Europe/Malta", "W. Europe Standard Time"},                   |
| Mariehamn      | {"Europe/Mariehamn", "FLE Standard Time"},                     |
| Minsk          | {"Europe/Minsk", "Belarus Standard Time"},                     |
| Monaco         | {"Europe/Monaco", "W. Europe Standard Time"},                  |
| Moscow         | {"Europe/Moscow", "Russian Standard Time"},                    |
| Oslo           | {"Europe/Oslo", "W. Europe Standard Time"},                    |
| Paris          | {"Europe/Paris", "Romance Standard Time"},                     |
| Podgorica      | {"Europe/Podgorica", "Central Europe Standard Time"},          |
| Prague         | {"Europe/Prague", "Central Europe Standard Time"},             |
| Riga           | {"Europe/Riga", "FLE Standard Time"},                          |
| Rome           | {"Europe/Rome", "W. Europe Standard Time"},                    |
| Samara         | {"Europe/Samara", "Russia Time Zone 3"},                       |
| San_Marino     | {"Europe/San_Marino", "W. Europe Standard Time"},              |
| Sarajevo       | {"Europe/Sarajevo", "Central European Standard Time"},         |
| Simferopol     | {"Europe/Simferopol", "Russian Standard Time"},                |
| Skopje         | {"Europe/Skopje", "Central European Standard Time"},           |
| Sofia          | {"Europe/Sofia", "FLE Standard Time"},                         |
| Stockholm      | {"Europe/Stockholm", "W. Europe Standard Time"},               |
| Tallinn        | {"Europe/Tallinn", "FLE Standard Time"},                       |
| Tirane         | {"Europe/Tirane", "Central Europe Standard Time"},             |
| Uzhgorod       | {"Europe/Uzhgorod", "FLE Standard Time"},                      |
| Vaduz          | {"Europe/Vaduz", "W. Europe Standard Time"},                   |
| Vatican        | {"Europe/Vatican", "W. Europe Standard Time"},                 |
| Vienna         | {"Europe/Vienna", "W. Europe Standard Time"},                  |
| Vilnius        | {"Europe/Vilnius", "FLE Standard Time"},                       |
| Volgograd      | {"Europe/Volgograd", "Russian Standard Time"},                 |
| Warsaw         | {"Europe/Warsaw", "Central European Standard Time"},           |
| Zagreb         | {"Europe/Zagreb", "Central European Standard Time"},           |
| Zaporozhye     | {"Europe/Zaporozhye", "FLE Standard Time"},                    |
| Zurich         | {"Europe/Zurich", "W. Europe Standard Time"},                  |
| GMT            | {"GMT", "GMT Standard Time"},                                  |
| Antananarivo   | {"Indian/Antananarivo", "E. Africa Standard Time"},            |
| Chagos         | {"Indian/Chagos", "Central Asia Standard Time"},               |
| Christmas      | {"Indian/Christmas", "SE Asia Standard Time"},                 |
| Cocos          | {"Indian/Cocos", "Myanmar Standard Time"},                     |
| Comoro         | {"Indian/Comoro", "E. Africa Standard Time"},                  |
| Kerguelen      | {"Indian/Kerguelen", "West Asia Standard Time"},               |
| Mahe           | {"Indian/Mahe", "Mauritius Standard Time"},                    |
| Maldives       | {"Indian/Maldives", "West Asia Standard Time"},                |
| Mauritius      | {"Indian/Mauritius", "Mauritius Standard Time"},               |
| Mayotte        | {"Indian/Mayotte", "E. Africa Standard Time"},                 |
| Reunion        | {"Indian/Reunion", "Mauritius Standard Time"},                 |
| Apia           | {"Pacific/Apia", "Samoa Standard Time"},                       |
| Auckland       | {"Pacific/Auckland", "New Zealand Standard Time"},             |
| Bougainville   | {"Pacific/Bougainville", "Central Pacific Standard Time"},     |
| Chatham        | {"Pacific/Chatham", "nan"},                                    |
| Chuuk          | {"Pacific/Chuuk", "nan"},                                      |
| Easter         | {"Pacific/Easter", "nan"},                                     |
| Efate          | {"Pacific/Efate", "Central Pacific Standard Time"},            |
| Enderbury      | {"Pacific/Enderbury", "Tonga Standard Time"},                  |
| Fakaofo        | {"Pacific/Fakaofo", "Tonga Standard Time"},                    |
| Fiji           | {"Pacific/Fiji", "Fiji Standard Time"},                        |
| Funafuti       | {"Pacific/Funafuti", "UTC+12"},                                |
| Galapagos      | {"Pacific/Galapagos", "Central America Standard Time"},        |
| Gambier        | {"Pacific/Gambier", "nan"},                                    |
| Guadalcanal    | {"Pacific/Guadalcanal", "Central Pacific Standard Time"},      |
| Guam           | {"Pacific/Guam", "West Pacific Standard Time"},                |
| Honolulu       | {"Pacific/Honolulu", "Hawaiian Standard Time"},                |
| Johnston       | {"Pacific/Johnston", "Hawaiian Standard Time"},                |
| Kiritimati     | {"Pacific/Kiritimati", "Line Islands Standard Time"},          |
| Kosrae         | {"Pacific/Kosrae", "Central Pacific Standard Time"},           |
| Kwajalein      | {"Pacific/Kwajalein", "UTC+12"},                               |
| Majuro         | {"Pacific/Majuro", "UTC+12"},                                  |
| Marquesas      | {"Pacific/Marquesas", "nan"},                                  |
| Midway         | {"Pacific/Midway", "UTC-11"},                                  |
| Nauru          | {"Pacific/Nauru", "UTC+12"},                                   |
| Niue           | {"Pacific/Niue", "UTC-11"},                                    |
| Norfolk        | {"Pacific/Norfolk", "nan"},                                    |
| Noumea         | {"Pacific/Noumea", "Central Pacific Standard Time"},           |
| Pago_Pago      | {"Pacific/Pago_Pago", "UTC-11"},                               |
| Palau          | {"Pacific/Palau", "Tokyo Standard Time"},                      |
| Pitcairn       | {"Pacific/Pitcairn", "nan"},                                   |
| Pohnpei        | {"Pacific/Pohnpei", "nan"},                                    |
| Ponape         | {"Pacific/Ponape", "Central Pacific Standard Time"},           |
| Port_Moresby   | {"Pacific/Port_Moresby", "West Pacific Standard Time"},        |
| Rarotonga      | {"Pacific/Rarotonga", "Hawaiian Standard Time"},               |
| Saipan         | {"Pacific/Saipan", "West Pacific Standard Time"},              |
| Tahiti         | {"Pacific/Tahiti", "Hawaiian Standard Time"},                  |
| Tarawa         | {"Pacific/Tarawa", "UTC+12"},                                  |
| Tongatapu      | {"Pacific/Tongatapu", "Tonga Standard Time"},                  |
| Truk           | {"Pacific/Truk", "West Pacific Standard Time"},                |
| Wake           | {"Pacific/Wake", "UTC+12"},                                    |
| Wallis         | {"Pacific/Wallis", "UTC+12"},                                  |