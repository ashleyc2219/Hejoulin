import React from 'react'

const Menu = ({
  places,
  setDisplayPlaces,
  area,
  setArea,
  type,
  setType,
  isMap,
  setIsMap,
  setCoordinates,
  setZoom,
  setBounds,
}) => {
  return (
    <div className="menu">
      <div className="menu-container d-flex justify-content-between align-items-center">
        <div className="filter">
          <select
            value={area}
            onChange={(e) => {
              setArea(e.target.value)
              switch (e.target.value) {
                case '北部':
                  setCoordinates({ lat: 25.047675, lng: 121.517055 })
                  break
                case '中部':
                  setCoordinates({ lat: 24.14431, lng: 120.69 })
                  break
                case '南部':
                  setCoordinates({ lat: 22.65, lng: 120.3 })
                  break
                default:
                  setZoom(7)
              }
            }}
            className="decorated mr-2"
            name="area"
            required
          >
            <option value="all">地區</option>
            <option value="北部">北部</option>
            <option value="中部">中部</option>
            <option value="南部">南部</option>
          </select>{' '}
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="decorated"
            name="type"
            required
          >
            <option value="all">餐廳類型</option>
            <option value="Fine Dining">Fine Dining</option>
            <option value="居酒屋">居酒屋</option>
            <option value="Sake Bar">Sake Bar</option>
          </select>
        </div>
        <div className="toggle align-items-center d-none d-lg-flex">
          <p className="mr-2 mb-0">列表</p>
          <input
            type="checkbox"
            id="switch"
            onChange={() => {
              setIsMap((prev) => !prev)
              setZoom(7)
              setBounds([
                115.75459226462789, 19.920955983933112, 125.74116453025289,
                27.877216817234554,
              ])
            }}
          />
          <label htmlFor="switch">Toggle</label>
        </div>
      </div>
    </div>
  )
}

export default Menu
