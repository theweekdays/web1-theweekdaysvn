const id_Product_List_Default = 'product-list-default';
const id_Product_List_Price_Asc = 'product-list-price-asc';
const id_Product_List_Name_Asc = 'product-list-name-asc';

function shortProductList(mode) {
    if(mode == "default") {
        document.getElementById(id_Product_List_Default).setAttribute("class", "");
        document.getElementById(id_Product_List_Price_Asc).setAttribute("class", "visually-hidden");
        document.getElementById(id_Product_List_Name_Asc).setAttribute("class", "visually-hidden");
        console.log("default");
    }
    else if(mode == "price-asc") {
        document.getElementById(id_Product_List_Default).setAttribute("class", "visually-hidden");
        document.getElementById(id_Product_List_Price_Asc).setAttribute("class", "");
        document.getElementById(id_Product_List_Name_Asc).setAttribute("class", "visually-hidden");
        console.log("price-asc");
    }
    else if(mode == "name-asc") {
        document.getElementById(id_Product_List_Default).setAttribute("class", "visually-hidden");
        document.getElementById(id_Product_List_Price_Asc).setAttribute("class", "visually-hidden");
        document.getElementById(id_Product_List_Name_Asc).setAttribute("class", "");
        console.log("name-asc");
    }
}