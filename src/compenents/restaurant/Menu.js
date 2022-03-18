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
}) => {
  return (
    <div className="menu">
      <div className="menu-container d-flex justify-content-between align-items-center">
        <div className="filter">
          <select
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="decorated mr-2"
            name="area"
            required
          >
            <option value="all">全部</option>
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
            <option value="all">全部</option>
            <option value="Fine Dining">Fine Dining</option>
            <option value="居酒屋">居酒屋</option>
            <option value="Sake Bar">Sake Bar</option>
          </select>
        </div>
        <div className="toggle align-items-center d-none d-lg-flex">
          <p className="mr-2 mb-0">地圖</p>
          <input
            type="checkbox"
            id="switch"
            onChange={() => {
              setIsMap((prev) => !prev)
            }}
          />
          <label htmlFor="switch">Toggle</label>
        </div>
      </div>
    </div>
  )
}

export default Menu
