var HtmlToPdf = require('./htmlToPdf');
var htmlToPdf = new HtmlToPdf();

Array.prototype.unique = function (property) {
    let s = new Set();

    return this.filter((value, index, self) => {
        if (property && s.has(value[property])) {
            return false;
        } else if (property) {
            s.add(value[property])
            return true;
        }
        if (s.has(value)) {
            return false;
        }
        s.add(value);
        return true;
    })
}

var fs = require('fs');

const guest1 = {
    address: "12345 Marina Ave",
    age_group: null,
    city: "Marina Del Rey",
    created_at: null,
    deleted_at: null,
    email: "StanWig@yahoo.com",
    first_name: "Stanley",
    group: { id: "96287e9b-cd96-48e5-85a9-dd0278ed656d", name: "Bride & Groom", created_at: null, updated_at: null, wedding_id: "350d2972-e7e5-46fb-9816-907d07cfa516" },
    group_id: "96287e9b-cd96-48e5-85a9-dd0278ed656d",
    has_plus_one: false,
    id: "2d8dace9-e5d7-48c1-81cc-0d8a611c35c5",
    last_name: "Wiggum",
    state: "CA",
    status: "pending",
    table: {
        created_at: "2021-01-20T04:00:26.000Z",
        deleted_at: null,
        id: "ac8956fb-1e4b-4076-b8e0-876ad0f04ac0",
        name: "Friends and Coworkers",
        pos_left: 788,
        pos_top: 215,
        rotation: 360,
        seat_count_per_row: 10,
        type: "rect",
        updated_at: "2021-01-25T17:15:29.000Z",
        wedding_id: "350d2972-e7e5-46fb-9816-907d07cfa516",
    },
    updated_at: "2021-01-20T21:20:03.000Z",
    wedding_id: "350d2972-e7e5-46fb-9816-907d07cfa516",
    zip_code: "90292",
}

const guest2 = {
    address: "12345 Marina Ave",
    age_group: null,
    city: "Marina Del Rey",
    created_at: null,
    deleted_at: null,
    email: "StanWig@yahoo.com",
    first_name: "Robert",
    group: { id: "96287e9b-cd96-48e5-85a9-dd0278ed656d", name: "Bride & Groom", created_at: null, updated_at: null, wedding_id: "350d2972-e7e5-46fb-9816-907d07cfa516" },
    group_id: "96287e9b-cd96-48e5-85a9-dd0278ed656d",
    has_plus_one: false,
    id: "2d8dace9-e5d7-48c1-81cc-0d8a611c35c5",
    last_name: "Louis",
    state: "CA",
    status: "pending",
    table: {
        created_at: "2021-01-20T04:00:26.000Z",
        deleted_at: null,
        id: "cc8956fb-1e4b-4076-b8e0-876ad0f04ac0",
        name: "Table 2",
        pos_left: 788,
        pos_top: 215,
        rotation: 360,
        seat_count_per_row: 10,
        type: "rect",
        updated_at: "2021-01-25T17:15:29.000Z",
        wedding_id: "350d2972-e7e5-46fb-9816-907d07cfa516",
    },
    updated_at: "2021-01-20T21:20:03.000Z",
    wedding_id: "350d2972-e7e5-46fb-9816-907d07cfa516",
    zip_code: "90292",
}

const guest3 = {
    address: "12345 Babbitt Ave",
    age_group: null,
    city: "Marina Del Rey",
    created_at: null,
    deleted_at: null,
    email: "StanWig@yahoo.com",
    first_name: "Robert",
    group: { id: "96287e9b-cd96-48e5-85a9-dd0278ed656d", name: "Bride & Groom", created_at: null, updated_at: null, wedding_id: "350d2972-e7e5-46fb-9816-907d07cfa516" },
    group_id: "96287e9b-cd96-48e5-85a9-dd0278ed656d",
    has_plus_one: false,
    id: "2d8dace9-e5d7-48c1-81cc-0d8a611c35c5",
    last_name: "Louis",
    state: "CA",
    status: "pending",
    table: {
        created_at: "2021-01-20T04:00:26.000Z",
        deleted_at: null,
        id: "lc8956fb-1e4b-4076-b8e0-876ad0f04ac0",
        name: "Table 3",
        pos_left: 788,
        pos_top: 215,
        rotation: 360,
        seat_count_per_row: 10,
        type: "rect",
        updated_at: "2021-01-25T17:15:29.000Z",
        wedding_id: "350d2972-e7e5-46fb-9816-907d07cfa516",
    },
    updated_at: "2021-01-20T21:20:03.000Z",
    wedding_id: "350d2972-e7e5-46fb-9816-907d07cfa516",
    zip_code: "90292",
}

const guest4 = {
    address: "12345 Babbitt Ave",
    age_group: null,
    city: "Marina Del Rey",
    created_at: null,
    deleted_at: null,
    email: "StanWig@yahoo.com",
    first_name: "Robert",
    group: { id: "96287e9b-cd96-48e5-85a9-dd0278ed656d", name: "Bride & Groom", created_at: null, updated_at: null, wedding_id: "350d2972-e7e5-46fb-9816-907d07cfa516" },
    group_id: "96287e9b-cd96-48e5-85a9-dd0278ed656d",
    has_plus_one: false,
    id: "2d8dace9-e5d7-48c1-81cc-0d8a611c35c5",
    last_name: "Louis",
    state: "CA",
    status: "pending",
    table: {
        created_at: "2021-01-20T04:00:26.000Z",
        deleted_at: null,
        id: "pc8956fb-1e4b-4076-b8e0-876ad0f04ac0",
        name: "Table 4",
        pos_left: 788,
        pos_top: 215,
        rotation: 360,
        seat_count_per_row: 10,
        type: "rect",
        updated_at: "2021-01-25T17:15:29.000Z",
        wedding_id: "350d2972-e7e5-46fb-9816-907d07cfa516",
    },
    updated_at: "2021-01-20T21:20:03.000Z",
    wedding_id: "350d2972-e7e5-46fb-9816-907d07cfa516",
    zip_code: "90292",
}


const guests = [
    guest1, guest2, guest3, guest4, guest1, guest2, guest3, guest1, guest2, guest3,
    guest1, guest2, guest3, guest4, guest1, guest2, guest3, guest1, guest2, guest3,

    guest1, guest2, guest3, guest4, guest1, guest2, guest3, guest1, guest2, guest3

].slice().map((guest, index) => {
    let g = { ...guest }
    let t = { ...g.table }
    t.id += index.toString()
    g.table = t
    return g
})

async function getDoc(cols, backgroundImage, guests) {
    const document = {
        html: fs.readFileSync('test.hbs', 'utf8'),
        data: {
            guests: guests.concat(guests),
            groupedGuests: htmlToPdf.groupGuestsToTables(guests.concat(guests)),
            image: await htmlToPdf.file_to_base64(backgroundImage),
            columns: cols
        },
        path: "./output.pdf"
    };
    return document
}

getDoc(2, 'wedding.jpg', guests).then(document => {
    htmlToPdf.create_pdf_from_html(document)
        .then(res => {
            console.log(res)
        })
        .catch(error => {
            console.error(error)
        });
})