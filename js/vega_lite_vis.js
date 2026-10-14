var vg_1 = "js/donations.vg.json";
vegaEmbed("#donations_chart", vg_1).then(function(result) {
}).catch(console.error);


var vg_2 = "js/distributions.vg.json";
vegaEmbed("#distributions_chart", vg_2, { "actions": false }).then(function(result) {
}).catch(console.error);
 

var vg_3 = "js/wellbeing.vg.json";
vegaEmbed("#wellbeing_chart", vg_3, { "actions": false }).then(function(result) {
}).catch(console.error);