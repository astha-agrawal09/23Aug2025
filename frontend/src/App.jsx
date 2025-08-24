
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { BASE_URL } from './hepler/Helper';

function App() {

  const [category, setCategory] = useState([])
  useEffect(() => {
    try {
      axios.get(`${BASE_URL}/api/categories?populate=*&sort=order:asc`)
        .then(function (response) {
          // handle success
          console.log(response?.data?.data);
          setCategory(response?.data?.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    } catch (error) {
      console.log(error);
    }
  }, [])

  const [cities, setCities] = useState([])

  useEffect(() => {
    try {
      axios.get(`${BASE_URL}api/cities?polpulate=*`)
        .then(function (response) {
          // handle success
          console.log(response?.data?.data);
          setCities(response?.data?.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    } catch (error) {
      console.log(error);
    }
  }, [])

  return (
    <>
      <div className="row mt-4">
        <div className="col-2 offset-1">
          <input className=" a_input form-control " placeholder="Select Location" />
          <ul className=" a_list list-group">
            {

              cities.map((cv, idx, arr) => {
                return (
                  <li className="list-group-item">
                    <a href="#">{cv.name}</a>
                  </li>
                )
              })
            }


          </ul>
        </div>
        <div className="col-3">
          <input className="form-control " placeholder="Select Bussinesses Here" />
        </div>
        <ul className="a_category offset mt-5">
          {
            category.length > 0 &&
            category.map((cv, idx, arr) => {
              return (
                <li key={arr}>
                  <a href="#" className="p-2 border ms-4">{cv.name}</a>
                </li>
              )
            })
          }


        </ul>
      </div>
    </>
  )
}

export default App
