// Part A

var people = [{
    "id": 1,
    "firstName": "Marna",
    "lastName": "Raft",
    "gender": "Female",
    "birthDate": "1995-02-15T18:37:46Z",
    "email": "mraft0@de.vu",
    "web": "http://sina.com.cn/iaculis/justo/in.png?at=nam&nibh=dui&in=proin&hac=leo&habitasse=odio&platea=porttitor&dictumst=id&aliquam=consequat&augue=in&quam=consequat&sollicitudin=ut&vitae=nulla&consectetuer=sed&eget=accumsan&rutrum=felis&at=ut&lorem=at&integer=dolor&tincidunt=quis&ante=odio&vel=consequat&ipsum=varius&praesent=integer&blandit=ac&lacinia=leo&erat=pellentesque&vestibulum=ultrices&sed=mattis",
    "creditScore": 399,
    "rating": 19.2
},
    {
        "id": 2,
        "firstName": "Mattheus",
        "lastName": "Chamberlayne",
        "gender": "Male",
        "birthDate": "1992-03-16T17:20:34Z",
        "email": "mchamberlayne1@vimeo.com",
        "web": "http://w3.org/luctus/et/ultrices/posuere.html?amet=tortor&sem=duis&fusce=mattis&consequat=egestas&nulla=metus&nisl=aenean&nunc=fermentum&nisl=donec&duis=ut&bibendum=mauris&felis=eget&sed=massa&interdum=tempor&venenatis=convallis&turpis=nulla&enim=neque&blandit=libero&mi=convallis&in=eget&porttitor=eleifend&pede=luctus&justo=ultricies&eu=eu&massa=nibh&donec=quisque&dapibus=id&duis=justo&at=sit&velit=amet&eu=sapien&est=dignissim&congue=vestibulum&elementum=vestibulum&in=ante&hac=ipsum&habitasse=primis&platea=in&dictumst=faucibus&morbi=orci&vestibulum=luctus",
        "creditScore": 539,
        "rating": 4.44
    },
    {
        "id": 3,
        "firstName": "Nikaniki",
        "lastName": "Machent",
        "gender": "Female",
        "birthDate": "1993-08-31T15:31:52Z",
        "email": "nmachent2@xrea.com",
        "web": "https://cpanel.net/tellus/nulla/ut/erat/id.jsp?venenatis=nulla&non=suspendisse&sodales=potenti&sed=cras&tincidunt=in&eu=purus&felis=eu&fusce=magna&posuere=vulputate&felis=luctus&sed=cum&lacus=sociis&morbi=natoque&sem=penatibus&mauris=et&laoreet=magnis&ut=dis&rhoncus=parturient&aliquet=montes&pulvinar=nascetur&sed=ridiculus",
        "creditScore": 275,
        "rating": 8.68
    },
    {
        "id": 4,
        "firstName": "Gannon",
        "lastName": "Vasilchenko",
        "gender": "Male",
        "birthDate": "1997-06-02T02:47:26Z",
        "email": "gvasilchenko3@washington.edu",
        "web": "http://google.fr/magna/vulputate/luctus/cum/sociis/natoque.js?duis=neque&consequat=libero&dui=convallis&nec=eget&nisi=eleifend&volutpat=luctus&eleifend=ultricies&donec=eu&ut=nibh&dolor=quisque&morbi=id&vel=justo&lectus=sit&in=amet&quam=sapien&fringilla=dignissim&rhoncus=vestibulum&mauris=vestibulum&enim=ante&leo=ipsum&rhoncus=primis&sed=in&vestibulum=faucibus&sit=orci&amet=luctus&cursus=et&id=ultrices&turpis=posuere&integer=cubilia&aliquet=curae&massa=nulla&id=dapibus&lobortis=dolor&convallis=vel&tortor=est&risus=donec&dapibus=odio&augue=justo&vel=sollicitudin&accumsan=ut&tellus=suscipit&nisi=a&eu=feugiat&orci=et&mauris=eros&lacinia=vestibulum&sapien=ac&quis=est&libero=lacinia&nullam=nisi&sit=venenatis&amet=tristique&turpis=fusce&elementum=congue&ligula=diam&vehicula=id&consequat=ornare&morbi=imperdiet&a=sapien&ipsum=urna&integer=pretium&a=nisl&nibh=ut&in=volutpat&quis=sapien&justo=arcu&maecenas=sed&rhoncus=augue&aliquam=aliquam&lacus=erat&morbi=volutpat&quis=in&tortor=congue",
        "creditScore": 290,
        "rating": 18.7
    },
    {
        "id": 5,
        "firstName": "Louisa",
        "lastName": "Bestman",
        "gender": "Female",
        "birthDate": "1992-01-29T20:42:23Z",
        "email": "lbestman4@joomla.org",
        "web": "http://studiopress.com/metus/sapien/ut/nunc/vestibulum.jsp?a=elit&odio=sodales&in=scelerisque&hac=mauris&habitasse=sit&platea=amet&dictumst=eros&maecenas=suspendisse&ut=accumsan&massa=tortor&quis=quis&augue=turpis&luctus=sed&tincidunt=ante&nulla=vivamus&mollis=tortor&molestie=duis&lorem=mattis&quisque=egestas&ut=metus&erat=aenean&curabitur=fermentum&gravida=donec&nisi=ut&at=mauris&nibh=eget&in=massa&hac=tempor&habitasse=convallis&platea=nulla&dictumst=neque&aliquam=libero&augue=convallis&quam=eget&sollicitudin=eleifend&vitae=luctus&consectetuer=ultricies&eget=eu&rutrum=nibh&at=quisque&lorem=id&integer=justo&tincidunt=sit&ante=amet&vel=sapien&ipsum=dignissim&praesent=vestibulum&blandit=vestibulum&lacinia=ante&erat=ipsum&vestibulum=primis&sed=in&magna=faucibus&at=orci&nunc=luctus&commodo=et&placerat=ultrices&praesent=posuere&blandit=cubilia&nam=curae&nulla=nulla&integer=dapibus&pede=dolor&justo=vel&lacinia=est&eget=donec&tincidunt=odio&eget=justo&tempus=sollicitudin&vel=ut&pede=suscipit&morbi=a&porttitor=feugiat&lorem=et&id=eros&ligula=vestibulum&suspendisse=ac&ornare=est&consequat=lacinia&lectus=nisi&in=venenatis",
        "creditScore": 386,
        "rating": 18.75
    },
    {
        "id": 6,
        "firstName": "Ted",
        "lastName": "Chrichton",
        "gender": "Male",
        "birthDate": "1997-11-08T05:28:35Z",
        "email": "tchrichton5@cargocollective.com",
        "web": "http://cargocollective.com/erat/curabitur/gravida.jsp?lobortis=aenean&est=lectus&phasellus=pellentesque&sit=eget&amet=nunc&erat=donec&nulla=quis&tempus=orci&vivamus=eget&in=orci&felis=vehicula&eu=condimentum&sapien=curabitur&cursus=in&vestibulum=libero&proin=ut&eu=massa&mi=volutpat&nulla=convallis&ac=morbi&enim=odio&in=odio&tempor=elementum&turpis=eu&nec=interdum&euismod=eu&scelerisque=tincidunt&quam=in&turpis=leo&adipiscing=maecenas&lorem=pulvinar&vitae=lobortis&mattis=est&nibh=phasellus&ligula=sit&nec=amet&sem=erat&duis=nulla&aliquam=tempus&convallis=vivamus&nunc=in&proin=felis&at=eu&turpis=sapien&a=cursus&pede=vestibulum&posuere=proin&nonummy=eu&integer=mi&non=nulla&velit=ac&donec=enim&diam=in&neque=tempor&vestibulum=turpis&eget=nec&vulputate=euismod&ut=scelerisque&ultrices=quam&vel=turpis&augue=adipiscing&vestibulum=lorem&ante=vitae&ipsum=mattis&primis=nibh&in=ligula&faucibus=nec&orci=sem&luctus=duis&et=aliquam&ultrices=convallis&posuere=nunc&cubilia=proin&curae=at&donec=turpis&pharetra=a&magna=pede&vestibulum=posuere&aliquet=nonummy&ultrices=integer&erat=non&tortor=velit&sollicitudin=donec&mi=diam&sit=neque&amet=vestibulum&lobortis=eget&sapien=vulputate&sapien=ut&non=ultrices&mi=vel&integer=augue&ac=vestibulum&neque=ante&duis=ipsum&bibendum=primis&morbi=in",
        "creditScore": 522,
        "rating": 15.64
    },
    {
        "id": 7,
        "firstName": "Hadleigh",
        "lastName": "Hutcheson",
        "gender": "Male",
        "birthDate": "1995-06-14T20:09:21Z",
        "email": "hhutcheson6@sciencedaily.com",
        "web": "https://taobao.com/velit/donec/diam/neque.json?posuere=sit&cubilia=amet&curae=sem&donec=fusce&pharetra=consequat&magna=nulla&vestibulum=nisl&aliquet=nunc&ultrices=nisl&erat=duis&tortor=bibendum&sollicitudin=felis&mi=sed&sit=interdum&amet=venenatis&lobortis=turpis&sapien=enim&sapien=blandit&non=mi",
        "creditScore": 533,
        "rating": 10.39
    },
    {
        "id": 8,
        "firstName": "Dwayne",
        "lastName": "Fuente",
        "gender": "Male",
        "birthDate": "1999-01-21T23:56:28Z",
        "email": "dfuente7@examiner.com",
        "web": "http://aboutads.info/imperdiet.jsp?fusce=in&congue=faucibus&diam=orci&id=luctus&ornare=et&imperdiet=ultrices&sapien=posuere&urna=cubilia&pretium=curae&nisl=duis&ut=faucibus&volutpat=accumsan&sapien=odio&arcu=curabitur&sed=convallis&augue=duis&aliquam=consequat&erat=dui&volutpat=nec&in=nisi&congue=volutpat&etiam=eleifend&justo=donec&etiam=ut&pretium=dolor&iaculis=morbi&justo=vel&in=lectus&hac=in&habitasse=quam&platea=fringilla&dictumst=rhoncus&etiam=mauris&faucibus=enim&cursus=leo&urna=rhoncus&ut=sed&tellus=vestibulum&nulla=sit&ut=amet&erat=cursus&id=id&mauris=turpis&vulputate=integer&elementum=aliquet&nullam=massa&varius=id&nulla=lobortis&facilisi=convallis&cras=tortor&non=risus&velit=dapibus&nec=augue&nisi=vel&vulputate=accumsan&nonummy=tellus&maecenas=nisi&tincidunt=eu&lacus=orci&at=mauris&velit=lacinia&vivamus=sapien&vel=quis&nulla=libero&eget=nullam&eros=sit&elementum=amet&pellentesque=turpis&quisque=elementum&porta=ligula&volutpat=vehicula&erat=consequat&quisque=morbi&erat=a&eros=ipsum&viverra=integer&eget=a&congue=nibh&eget=in&semper=quis&rutrum=justo&nulla=maecenas&nunc=rhoncus&purus=aliquam&phasellus=lacus&in=morbi&felis=quis&donec=tortor&semper=id&sapien=nulla&a=ultrices&libero=aliquet&nam=maecenas&dui=leo",
        "creditScore": 681,
        "rating": 3.97
    },
    {
        "id": 9,
        "firstName": "Hymie",
        "lastName": "Rowesby",
        "gender": "Male",
        "birthDate": "1999-06-16T19:01:20Z",
        "email": "hrowesby8@naver.com",
        "web": "http://hexun.com/nulla/sed/vel/enim/sit/amet/nunc.jsp?eu=convallis&mi=morbi&nulla=odio&ac=odio&enim=elementum&in=eu&tempor=interdum&turpis=eu&nec=tincidunt&euismod=in&scelerisque=leo&quam=maecenas&turpis=pulvinar&adipiscing=lobortis&lorem=est&vitae=phasellus&mattis=sit&nibh=amet",
        "creditScore": 271,
        "rating": 1.98
    },
    {
        "id": 10,
        "firstName": "Aguie",
        "lastName": "Francombe",
        "gender": "Male",
        "birthDate": "1997-07-27T20:57:06Z",
        "email": "afrancombe9@walmart.com",
        "web": "https://zimbio.com/nibh/in/hac/habitasse/platea/dictumst/aliquam.js?posuere=et&metus=ultrices&vitae=posuere&ipsum=cubilia&aliquam=curae&non=duis&mauris=faucibus&morbi=accumsan&non=odio&lectus=curabitur&aliquam=convallis&sit=duis&amet=consequat&diam=dui&in=nec&magna=nisi&bibendum=volutpat&imperdiet=eleifend&nullam=donec&orci=ut&pede=dolor&venenatis=morbi&non=vel&sodales=lectus&sed=in&tincidunt=quam&eu=fringilla&felis=rhoncus&fusce=mauris&posuere=enim&felis=leo&sed=rhoncus&lacus=sed&morbi=vestibulum&sem=sit&mauris=amet&laoreet=cursus&ut=id&rhoncus=turpis&aliquet=integer&pulvinar=aliquet&sed=massa&nisl=id&nunc=lobortis&rhoncus=convallis&dui=tortor&vel=risus&sem=dapibus&sed=augue&sagittis=vel&nam=accumsan&congue=tellus&risus=nisi",
        "creditScore": 444,
        "rating": 7.33
    }];

// Task 1

function capNotFirstLetter(str) {
    str = str.toString();
    var str1 = str.substr(0, 1);
    var str2 = str.substr(1,);
    str1 = str1.toLowerCase();
    str2 = str2.toUpperCase();
    str = str1 + str2;
    return (str);
}

// Task 2

var data = people.map(p => p);
for (i in data) {
    data[i].firstName = capNotFirstLetter(data[i].firstName);
    console.log(data[i].firstName);
}

// Task 3

var gt400 = data.find(function (g) {
    return g.creditScore > 400;
});

console.log(gt400);

// Task 4

data = data.sort(function (e) {
    return e.birthDate;
});

console.log(data);