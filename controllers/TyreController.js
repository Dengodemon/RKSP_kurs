const TyreModel = require("../models/Tyre.js")

const loadTyres = (req, res) => {
  try {
    const doc = new TyreModel({
      img: "cordiant",
      name: "Шина летняя 185/65R15 ROAD_RUNNER, PS-1 б/к",
      brand: "CORDIANT",
      width: 185,
      profile: 65,
      diameter: 15,
      carType: "Легковой",
      season: "Летняя",
      spikes: "Нет",
      cost: 3674,
      amount: 0,
    }, {
      img: "pirelli",
      name: "PIRELLI POWERGY 225/60 R18 104V XL",
      brand: "PIRELLI",
      width: 225,
      profile: 60,
      diameter: 18,
      carType: "Легковой",
      season: "Летняя",
      spikes: "Нет",
      cost: 12110,
      amount: 0,
    }, {
      img: "kama",
      name: "КАМА IRBIS КАМА-505 175/70 R13 82T",
      brand: "KAMA",
      width: 175,
      profile: 70,
      diameter: 13,
      carType: "Легковой",
      season: "Зимняя",
      spikes: "Есть",
      cost: 3120,
      amount: 0,
    }, {
      img: "goodyear",
      name: "GOODYEAR ULTRAGRIP ARCTIC 2 SUV 275/45 R21 110T XL",
      brand: "GOOGYEAR",
      width: 275,
      profile: 45,
      diameter: 21,
      carType: "Легковой",
      season: "Зимняя",
      spikes: "Есть",
      cost: 24770,
      amount: 0,
    });
    doc.save();
  } catch (err) {
    console.log(err, "Добавление шин пошло по пизде");
    res.status(501).json({
      message: "Не удалось добавить товар в корзину",
    });
  }
}