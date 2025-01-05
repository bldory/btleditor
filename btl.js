/**
 * @param {String} value
 * @param {number} index
 */
class Cell {
  constructor(value, index) {
    this.byte = value;
    this.index = index;
    this.cell = document.createElement("span");
    this.cell.setAttribute("class", "cell");
    this.cell.textContent = value;
    this.cell.onclick = function () {
      if (selectedCellTemp) {
        selectedCellTemp.id = "";
      }
      this.setAttribute("id", "selected");
      selectedCellTemp = this;
    };
    hexEditor.appendChild(this.cell);
  }

  /**
   * @param {string} color
   */
  setColor(color) {
    this.cell.style.backgroundColor = color;
    this.cell.style.color = getContrast(color);
  }
}

const cityname = [
  { name: "London", index: 1 },
  { name: "Birmingham", index: 2 },
  { name: "Manchester", index: 3 },
  { name: "Dublin", index: 4 },
  { name: "Bristol", index: 5 },
  { name: "Liverpool", index: 6 },
  { name: "Glasgow", index: 7 },
  { name: "Galway", index: 8 },
  { name: "Stockholm", index: 9 },
  { name: "Gothenburg", index: 10 },
  { name: "Oslo", index: 11 },
  { name: "Bergen", index: 12 },
  { name: "Paris", index: 13 },
  { name: "Bordeaux", index: 14 },
  { name: "Marseille", index: 15 },
  { name: "Lyon", index: 16 },
  { name: "Brest", index: 17 },
  { name: "Metz", index: 18 },
  { name: "Strasbourg", index: 19 },
  { name: "Dijon", index: 20 },
  { name: "Toulouse", index: 21 },
  { name: "Palma", index: 22 },
  { name: "Ajaccio", index: 23 },
  { name: "Madrid", index: 24 },
  { name: "Barcelona", index: 25 },
  { name: "Sevilla", index: 26 },
  { name: "Zaragoza", index: 27 },
  { name: "A Coruna", index: 28 },
  { name: "Badajoz", index: 29 },
  { name: "Valencia", index: 30 },
  { name: "Lisboa", index: 31 },
  { name: "Porto", index: 32 },
  { name: "Bruxelles", index: 33 },
  { name: "Antwerp", index: 34 },
  { name: "Amsterdam", index: 35 },
  { name: "Berlin", index: 36 },
  { name: "Hamburg", index: 37 },
  { name: "Cologne", index: 38 },
  { name: "Munich", index: 39 },
  { name: "Dortmund", index: 40 },
  { name: "Frankfurt", index: 41 },
  { name: "Nuremberg", index: 42 },
  { name: "Zurich", index: 43 },
  { name: "Rome", index: 44 },
  { name: "Milan", index: 45 },
  { name: "Naples", index: 46 },
  { name: "Turin", index: 47 },
  { name: "Venice", index: 48 },
  { name: "Palermo", index: 49 },
  { name: "Vienna", index: 50 },
  { name: "Warsaw", index: 51 },
  { name: "Poznan", index: 52 },
  { name: "Bialystok", index: 53 },
  { name: "Lublin", index: 54 },
  { name: "Krakow", index: 55 },
  { name: "Copenhagen", index: 56 },
  { name: "Budapest", index: 57 },
  { name: "Belgrade", index: 58 },
  { name: "Zagreb", index: 59 },
  { name: "Sofia", index: 60 },
  { name: "Athens", index: 61 },
  { name: "Prague", index: 62 },
  { name: "Bucharest", index: 63 },
  { name: "Iasi", index: 64 },
  { name: "Konigsberg", index: 65 },
  { name: "Riga", index: 66 },
  { name: "Helsinki", index: 67 },
  { name: "Turku", index: 68 },
  { name: "Joensuu", index: 69 },
  { name: "Ankara", index: 70 },
  { name: "Istanbul", index: 71 },
  { name: "Trabzon", index: 72 },
  { name: "Izmir", index: 73 },
  { name: "Aleppo", index: 74 },
  { name: "Jerusalem", index: 75 },
  { name: "Damascus", index: 76 },
  { name: "Baghdad", index: 77 },
  { name: "Basra", index: 78 },
  { name: "Riyadh", index: 79 },
  { name: "Medina", index: 80 },
  { name: "Jeddah", index: 81 },
  { name: "Dubai", index: 82 },
  { name: "Sana'a", index: 83 },
  { name: "Salalah", index: 84 },
  { name: "Tehran", index: 85 },
  { name: "Isfahan", index: 86 },
  { name: "Mashhad", index: 87 },
  { name: "Samarkand", index: 88 },
  { name: "Astana", index: 89 },
  { name: "Afghanistan", index: 90 },
  { name: "Ashgabat", index: 91 },
  { name: "Moscow", index: 92 },
  { name: "Yekaterinburg", index: 93 },
  { name: "Novosibirsk", index: 94 },
  { name: "Leningrad", index: 95 },
  { name: "Smolensk", index: 96 },
  { name: "Gorky", index: 97 },
  { name: "Kuybyshev", index: 98 },
  { name: "Saratov", index: 99 },
  { name: "Kazan", index: 100 },
  { name: "Orenburg", index: 101 },
  { name: "Ufa", index: 102 },
  { name: "Chelyabinsk", index: 103 },
  { name: "Omsk", index: 104 },
  { name: "Krasnoyarsk", index: 105 },
  { name: "Vladivostok", index: 106 },
  { name: "Chita", index: 107 },
  { name: "Khabarovsk", index: 108 },
  { name: "Aktyubinsk", index: 109 },
  { name: "Petrozavodsk", index: 110 },
  { name: "Voronezh", index: 111 },
  { name: "Yakutsk", index: 112 },
  { name: "Minsk", index: 113 },
  { name: "Gomel", index: 114 },
  { name: "Kiev", index: 115 },
  { name: "Kharkiv", index: 116 },
  { name: "Donetsk", index: 117 },
  { name: "Sevastopol", index: 118 },
  { name: "Stalingrad", index: 119 },
  { name: "Tbilisi", index: 120 },
  { name: "Tashkent", index: 121 },
  { name: "Dushanbe", index: 122 },
  { name: "Uliastai", index: 123 },
  { name: "Choibalsan", index: 124 },
  { name: "Ulan Bator", index: 125 },
  { name: "Peking", index: 126 },
  { name: "Nanking", index: 127 },
  { name: "Shanghai", index: 128 },
  { name: "Wuhan", index: 129 },
  { name: "Chongking", index: 130 },
  { name: "Hongkong", index: 131 },
  { name: "Guihui", index: 132 },
  { name: "Lanzhou", index: 133 },
  { name: "Kunming", index: 134 },
  { name: "Changsha", index: 135 },
  { name: "Dihua", index: 136 },
  { name: "Lhasa", index: 137 },
  { name: "Kashgar", index: 138 },
  { name: "Taipei", index: 139 },
  { name: "BeiJing", index: 140 },
  { name: "Changchun", index: 141 },
  { name: "Shenyang", index: 142 },
  { name: "Harbin", index: 143 },
  { name: "New Delhi", index: 144 },
  { name: "Kolkata", index: 145 },
  { name: "Mumbai", index: 146 },
  { name: "Lucknow", index: 147 },
  { name: "Jaipur", index: 148 },
  { name: "Bhopal", index: 149 },
  { name: "Karachi", index: 150 },
  { name: "Chennai", index: 151 },
  { name: "Mandalay", index: 152 },
  { name: "Yangon", index: 153 },
  { name: "Bangkok", index: 154 },
  { name: "Chiang Mai", index: 155 },
  { name: "Singapore", index: 156 },
  { name: "Kuala Lumpur", index: 157 },
  { name: "Hanoi", index: 158 },
  { name: "Phnom Penh", index: 159 },
  { name: "Tokyo", index: 160 },
  { name: "Osaka", index: 161 },
  { name: "Hiroshima", index: 162 },
  { name: "Sendai", index: 163 },
  { name: "Sapporo", index: 164 },
  { name: "Nagasaki", index: 165 },
  { name: "Seoul", index: 166 },
  { name: "Pyongyang", index: 167 },
  { name: "Busan", index: 168 },
  { name: "Manila", index: 169 },
  { name: "Jakarta", index: 170 },
  { name: "Port Moresby", index: 171 },
  { name: "Balikpapan", index: 172 },
  { name: "Medan", index: 173 },
  { name: "Timor", index: 174 },
  { name: "Darwin", index: 175 },
  { name: "Brisbane", index: 176 },
  { name: "Broome", index: 177 },
  { name: "Port Hedland", index: 178 },
  { name: "Halls Creek", index: 179 },
  { name: "Alice Springs", index: 180 },
  { name: "Longreach", index: 181 },
  { name: "Casablanca", index: 182 },
  { name: "Algiers", index: 183 },
  { name: "Adrar", index: 184 },
  { name: "Tunis", index: 185 },
  { name: "Tripoli", index: 186 },
  { name: "Benghazi", index: 187 },
  { name: "Al Jawf", index: 188 },
  { name: "Cairo", index: 189 },
  { name: "Alexandria", index: 190 },
  { name: "Aswan", index: 191 },
  { name: "Addis Ababa", index: 192 },
  { name: "Mogadishu", index: 193 },
  { name: "Khartoum", index: 194 },
  { name: "Port Sudan", index: 195 },
  { name: "Juba", index: 196 },
  { name: "Brazzaville", index: 197 },
  { name: "Yaounde", index: 198 },
  { name: "N'Djamena", index: 199 },
  { name: "Bangui", index: 200 },
  { name: "Dakar", index: 201 },
  { name: "Timbuktu", index: 202 },
  { name: "Monrovia", index: 203 },
  { name: "Georgetown", index: 204 },
  { name: "Niamey", index: 205 },
  { name: "Ottawa", index: 206 },
  { name: "Montreal", index: 207 },
  { name: "Toronto", index: 208 },
  { name: "Edmonton", index: 209 },
  { name: "Calgary", index: 210 },
  { name: "Whitehorse", index: 211 },
  { name: "Tuktoyaktuk", index: 212 },
  { name: "Vancouver", index: 213 },
  { name: "Yellowknife", index: 214 },
  { name: "Winnipeg", index: 215 },
  { name: "Labrador City", index: 216 },
  { name: "Iqaluit", index: 217 },
  { name: "Prince George", index: 218 },
  { name: "Baker Lake", index: 219 },
  { name: "Gillam", index: 220 },
  { name: "Kuujjuaq", index: 221 },
  { name: "Rankin Inlet", index: 222 },
  { name: "Washington", index: 223 },
  { name: "New York", index: 224 },
  { name: "Miami", index: 225 },
  { name: "Houston", index: 226 },
  { name: "Denver", index: 227 },
  { name: "San Francisco", index: 228 },
  { name: "Los Angeles", index: 229 },
  { name: "Billings", index: 230 },
  { name: "Minneapolis", index: 231 },
  { name: "Phoenix", index: 232 },
  { name: "Dallas", index: 233 },
  { name: "Chicago", index: 234 },
  { name: "Detroit", index: 235 },
  { name: "Atlanta", index: 236 },
  { name: "Hilo", index: 237 },
  { name: "Honolulu", index: 238 },
  { name: "Henderson Field", index: 239 },
  { name: "Mexico City", index: 240 },
  { name: "Monterrey", index: 241 },
  { name: "Guadalajara", index: 242 },
  { name: "Merida", index: 243 },
  { name: "Havana", index: 244 },
  { name: "Santiago", index: 245 },
  { name: "Port-au-Prince", index: 246 },
  { name: "Bogota", index: 247 },
  { name: "Cali", index: 248 },
  { name: "Caracas", index: 249 },
  { name: "Paramaribo", index: 250 },
  { name: "Lima", index: 251 },
  { name: "Ecuador", index: 252 },
  { name: "Santa Cruz", index: 253 },
  { name: "La Paz", index: 254 },
  { name: "Rio de Janeiro", index: 255 },
  { name: "Fortaleza", index: 256 },
  { name: "Manaus", index: 257 },
  { name: "Salvador", index: 258 },
  { name: "Palmas", index: 259 },
  { name: "Anchorage", index: 260 },
];

const cellList = [];
let MapW = 0;
let MapH = 0;
let MapSize = 0;
let countryCount = 0;
let buildingCount = 0;

let selectedCellTemp;
let ownershipPos;
let buildingPos;
let trapCount;
let trapPos;

let tooltip = document.getElementById("tooltip");
let tooltipText = document.getElementById("tooltipText");
let buildingText = document.getElementById("buildingText");

const canvas = document.querySelector("canvas");
//const canvas = document.getElementById("buildingCanvas");
const ctx = canvas.getContext("2d");

const hexEditor = document.getElementById("hexEditor");

document
  .getElementById("fileInput")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      const buffer = new Uint8Array(e.target.result);

      buffer.forEach((byte, index) => {
        const cell = new Cell(
          byte.toString(16).padStart(2, "0").toUpperCase(),
          index
        );
        cellList.push(cell);
      });
      initInfo();
    };

    reader.readAsArrayBuffer(file);
  });

/**
 * @param {number} index
 * @returns {Cell}
 */
function getCell(index) {
  return cellList[index];
}

/**
 * @param {number} index
 * @returns {string}
 */
function getCountryColor(index) {
  return (
    "#" +
    getCell(128 + index * 300 + 40).byte +
    getCell(128 + index * 300 + 41).byte +
    getCell(128 + index * 300 + 42).byte
  );
}
function invertHex(hex) {
  let hexR = (255 - parseInt(hex[1] + hex[2], 16)).toString(16);
  let hexG = (255 - parseInt(hex[3] + hex[4], 16)).toString(16);
  let hexB = (255 - parseInt(hex[5] + hex[6], 16)).toString(16);
  return (
    "#" + hexR.padEnd(2, hexR) + hexG.padEnd(2, hexG) + hexB.padEnd(2, hexB)
  );
}

function rgbToHex(rgbString) {
  const match = rgbString
    .split("(")[1]
    .split(")")[0]
    .split(",")
    .map(function (x) {
      //For each array element
      x = parseInt(x).toString(16);
      return x.length == 1 ? "0" + x : x;
    });
  return `#${match.join("")}`;
}

function getContrast(hex) {
  const r = parseInt(hex[1] + hex[2], 16) * 0.299;
  const g = parseInt(hex[3] + hex[4], 16) * 0.587;
  const b = parseInt(hex[5] + hex[6], 16) * 0.114;
  const v = r + g + b;
  return v >= 186 ? "#000000" : "#ffffff";
}

/**
 * @param {number} index
 * @param {number} count
 * @returns {number}
 */
function getHexValue(index, count) {
  var value = 0;
  for (let i = 0; i < count; i++) {
    value += parseInt(getCell(index + i).byte, 16) * 256 ** i;
  }
  return value;
}

function initInfo() {
  MapW = parseInt(getCell(16).byte, 16);
  MapH = parseInt(getCell(20).byte, 16);
  MapSize = MapW * MapH;
  countryCount = parseInt(getCell(24).byte, 16);
  initCountry();
  buildingCount = getHexValue(28, 2);
  buildingPos = ownershipPos + MapSize;
  setCellInfo(buildingPos, buildingCount, 2, "building", 32, 4);
  armyCount = getHexValue(32, 2);
  armyPos = buildingPos + buildingCount * 32;
  setCellInfo(armyPos, armyCount, 2, "army", 48, 2, 0, 0);
  trapCount = getHexValue(104, 2);
  console.log(trapCount);
  trapPos = armyPos + armyCount * 48;
  console.log(cellList[trapPos].byte);
  setTrap();
}

function initCountry() {
  ownershipPos = 128 + countryCount * 300 + MapSize * 2;
  for (var i = 0; i < countryCount; i++) {
    setCellColor(128 + i * 300, getCountryColor(i), 300);
    let targetCell = getCell(128 + i * 300);
    cellList
      .filter(
        (e, i) =>
          e.textContent == targetCell.byte &&
          i >= ownershipPos &&
          i < ownershipPos + MapSize
      )
      .forEach((e) => {
        e.style.backgroundColor = getCountryColor(i);
        e.style.color = getContrast(getCountryColor(i));
      });
  }
}

function setCellInfo(
  pos,
  count,
  index,
  name,
  size,
  typeIndex,
  imgX = 1,
  imgY = 1
) {
  let img = new Image();
  for (let i = 0; i < count; i++) {
    let coordinate = getHexValue(pos + i * size, 2);
    let coorCell = getCell(ownershipPos + coordinate - 296);
    let cellNum = getHexValue(index + pos + i * size, 2) - 1;
    coorCell.setColor(getCountryColor(parseInt(coorCell.byte, 16)));
    coorCell.cell.classList.add(name);
    coorCell.cell.addEventListener("mouseenter", () => {
      tooltipText.innerHTML = `
        ${coordinate.toString(16).padStart(4, "0").toUpperCase()}(${coordinate
        .toString(16)
        .slice(2, 4)
        .padStart(2, "0")
        .toUpperCase()} ${coordinate
        .toString(16)
        .slice(0, 2)
        .padStart(2, "0")
        .toUpperCase()})`;
      tooltip.style.display = "block";
      let imageNum = parseInt(getCell(typeIndex + pos + i * size).byte, 16);
      img.src = img.src = `./images/${name}/${name}_${imageNum}.png`;
      ctx.strokeText("Loading...", 0, 0);
      img.onload = function (e) {
        ctx.drawImage(
          img,
          ((canvas.width - img.width) / 2) * imgX,
          ((canvas.height - img.height) / 2) * imgY
        );
      };
      if (name == "building") {
        buildingText.textContent = `${
          cellNum >= 0 && cellNum < cityname.length
            ? cityname[cellNum].name
            : ""
        }`;
      }
    });
    coorCell.cell.addEventListener("mouseleave", () => {
      ctx.clearRect(0, 0, 270, 270);
      tooltip.style.display = "none";
      buildingText.textContent = "";
    });
  }
}

function setTrap() {
  for (let i = 0; i < trapCount; i++) {
    let coor = getHexValue(trapPos + i * 12, 2);
    coorCell = cellList[ownershipPos + coor - 296];
    coorCell.setColor(getCountryColor(getHexValue(2 + trapPos + i * 12, 2)));
    coorCell.cell.classList.add("trap");
    coorCell.cell.addEventListener("mouseenter", () => {
      tooltip.style.display = "block";
      let img = new Image();
      img.src = "./images/land_trap.png";
      img.onload = function () {
        ctx.drawImage(img, 109, 125);
      };
    });
    coorCell.cell.addEventListener("mouseleave", () => {
      ctx.clearRect(0, 0, 270, 270);
      tooltip.style.display = "none";
    });
  }
}

function updateTooltip(event) {
  tooltip.style.left = event.pageX + 15 + "px";
  tooltip.style.top = event.pageY + 2 + "px";
}

function setCellColor(index, color, count = 1) {
  for (let i = 0; i < count; i++) {
    let cell = cellList[index + i];
    cell.setColor(color);
  }
}

document.body.addEventListener("mousemove", updateTooltip);
