import "./MainSection.scss";

import Card from "./components/Card.js";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  Checkbox,
  Collapse,
  InputNumber,
  Pagination,
  Select,
  Slider,
} from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";

import filterIcon from "./files/settings-sliders.svg";
import closeIcon from "./files/cross.svg";

export default function Main(props) {
  let windowWidth = useSelector((state) => state.windowSize.width);
  let cards = [];
  for (let i = 0; i < 25; i++) {
    cards.push(<Card></Card>);
  }

  let ContentArray = [];
  for (let i = 0; i < Math.ceil(cards.length / 12); i++) {
    ContentArray.push(
      <div className="content">{cards.slice(i * 12, i * 12 + 12)}</div>
    );
  }
  console.log(ContentArray);

  const [page, setPage] = useState(1);

  const [isFilterShow, setIsFilterShow] = useState(false);
  const [PriceValue, setPriceValue] = useState({ min: 0, max: 18400 });
  return (
    <main className="mainSectionCatalog">
      <div className="mainZone">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Главная</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Каталог</Breadcrumb.Item>
        </Breadcrumb>
        <div className="mainContainer">
          <aside>
            <form className="asideForm">
              <div className="asideFormHeader">
                <Select
                  defaultValue="сортировать"
                  style={{ width: "100%" }}
                  options={[
                    {
                      value: "сортировать",
                      label: "сортировать",
                    },
                    {
                      value: "по возрастанию цены",
                      label: "по возрастанию цены",
                    },
                    {
                      value: "по убыванию цены",
                      label: "по убыванию цены",
                    },
                    {
                      value: "по популярности",
                      label: "по популярности",
                    },
                    {
                      value: "сначала новые",
                      label: "сначала новые",
                    },
                  ]}
                />
                <div className="settingIcon">
                  <button
                    onClick={(e) => {
                      setIsFilterShow(true);
                      e.preventDefault();
                    }}
                  >
                    <img src={filterIcon} alt="фильтр" />
                  </button>
                </div>
              </div>
              <div
                className="asideFormContentConteiner"
                style={
                  (isFilterShow && windowWidth < 768) || windowWidth > 768
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <div className="asideFormContent">
                  <div className="asideFormContentControl">
                    <div>Фильтр</div>
                    <button
                      onClick={(e) => {
                        setIsFilterShow(false);
                        e.preventDefault();
                      }}
                    >
                      <img src={closeIcon} alt="закрыть" />
                    </button>
                  </div>
                  <Collapse bordered={false} className="collapse" ghost>
                    <Collapse.Panel header="Цена" key="price">
                      <div className="priceSlider">
                        <div className="priceSliderInputs">
                          <InputNumber
                            value={PriceValue.min}
                            min={0}
                            max={18400}
                            onChange={(value) => {
                              setPriceValue({
                                min: value,
                                max: PriceValue.max,
                              });
                            }}
                            defaultValue={0}
                            step={5}
                          ></InputNumber>
                          <InputNumber
                            defaultValue={18400}
                            value={PriceValue.max}
                            min={0}
                            max={18400}
                            onChange={(value) => {
                              setPriceValue({
                                min: PriceValue.min,
                                max: value,
                              });
                            }}
                            step={5}
                          ></InputNumber>
                        </div>
                        <Slider
                          range={true}
                          min={0}
                          max={18400}
                          onChange={(value) => {
                            setPriceValue({ min: value[0], max: value[1] });
                          }}
                          value={[PriceValue.min, PriceValue.max]}
                          step={5}
                          defaultValue={[0, 18400]}
                        ></Slider>
                      </div>
                    </Collapse.Panel>
                    <Collapse.Panel header="Тип товара" key="productType">
                      <Checkbox.Group
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginInlineStart: "0px",
                        }}
                      >
                        <Checkbox
                          style={{ marginInlineStart: "0px" }}
                          value="Шины"
                        >
                          Шины
                        </Checkbox>
                        <Checkbox
                          style={{ marginInlineStart: "0px" }}
                          value="Диски"
                        >
                          Диски
                        </Checkbox>
                        <Checkbox
                          style={{ marginInlineStart: "0px" }}
                          value="Разное"
                        >
                          Разное
                        </Checkbox>
                      </Checkbox.Group>
                    </Collapse.Panel>
                    <Collapse.Panel header="Сезон" key="season">
                      <Checkbox.Group
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginInlineStart: "0px",
                        }}
                      >
                        <Checkbox
                          style={{ marginInlineStart: "0px" }}
                          value="M"
                        >
                          M
                        </Checkbox>
                        <Checkbox
                          style={{ marginInlineStart: "0px" }}
                          value="S"
                        >
                          S
                        </Checkbox>
                        <Checkbox
                          style={{ marginInlineStart: "0px" }}
                          value="M+S"
                        >
                          M+S
                        </Checkbox>
                      </Checkbox.Group>
                    </Collapse.Panel>
                    <Collapse.Panel header="Бренд" key="brand">
                      <Checkbox.Group
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Checkbox
                          style={{ marginInlineStart: "0px" }}
                          value="Belshina"
                        >
                          Belshina
                        </Checkbox>
                        <Checkbox
                          style={{ marginInlineStart: "0px" }}
                          value="Pocaba"
                        >
                          Pocaba
                        </Checkbox>
                        <Checkbox
                          style={{ marginInlineStart: "0px" }}
                          value="Kama"
                        >
                          Kama
                        </Checkbox>
                      </Checkbox.Group>
                    </Collapse.Panel>
                    <Collapse.Panel header="Диаметр" key="radius">
                      <Checkbox.Group
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Checkbox
                          value="R13"
                          style={{ marginInlineStart: "0px" }}
                        >
                          R13
                        </Checkbox>
                        <Checkbox
                          value="R14"
                          style={{ marginInlineStart: "0px" }}
                        >
                          R14
                        </Checkbox>
                        <Checkbox
                          value="R15"
                          style={{ marginInlineStart: "0px" }}
                        >
                          R15
                        </Checkbox>
                      </Checkbox.Group>
                    </Collapse.Panel>
                    <Collapse.Panel header="Ширина" key="width">
                      <Checkbox.Group
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Checkbox
                          value="170"
                          style={{ marginInlineStart: "0px" }}
                        >
                          170
                        </Checkbox>
                        <Checkbox
                          value="175"
                          style={{ marginInlineStart: "0px" }}
                        >
                          175
                        </Checkbox>
                        <Checkbox
                          value="200"
                          style={{ marginInlineStart: "0px" }}
                        >
                          200
                        </Checkbox>
                      </Checkbox.Group>
                    </Collapse.Panel>
                    <Collapse.Panel header="Высота" key="height">
                      <Checkbox.Group
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Checkbox
                          value="55"
                          style={{ marginInlineStart: "0px" }}
                        >
                          55
                        </Checkbox>
                        <Checkbox
                          value="60"
                          style={{ marginInlineStart: "0px" }}
                        >
                          60
                        </Checkbox>
                        <Checkbox
                          value="70"
                          style={{ marginInlineStart: "0px" }}
                        >
                          70
                        </Checkbox>
                      </Checkbox.Group>
                    </Collapse.Panel>
                  </Collapse>
                </div>
              </div>
            </form>
          </aside>
          <main>
            {[ContentArray[page - 1]]}
            <div className="pagination">
              <Pagination
                onChange={(value) => {
                  setPage(value);
                }}
                defaultValue={1}
                total={ContentArray.length * 10}
              ></Pagination>
            </div>
          </main>
        </div>
      </div>
    </main>
  );
}
