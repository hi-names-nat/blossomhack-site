import React from 'react'
import './Schedule.css'

export default function Schedule() {
  return (
    <table>
        <tr><th>Saturday, April 1st</th></tr>
        <tr>
            <td>10:00 AM</td>
            <td>Check in Opens: Irvine 194</td>
        </tr>
        <tr>
            <td>11:00 AM</td>
            <td>Lunch & Opening Ceremony</td>
        </tr>
        <tr>
            <td>11:30 AM</td>
            <td>Hacking Begins</td>
        </tr>
        <tr>
            <td>12:00 PM</td>
            <td>BobcatCTF Begins</td>
        </tr>
        <tr>
            <td>4:30-5:30 PM</td>
            <td>Easter Egg Hunt</td>
        </tr>
        <tr>
            <td>6:00 PM</td>
            <td>Dinner</td>
        </tr>
        <tr>
            <td>9:00 PM</td>
            <td>Wikipedia Race</td>
        </tr>
        <tr><th className='table-header'>Sunday, April 2nd</th></tr>
        <tr>
            <td>12:00 AM</td>
            <td>Midnight Snack</td>
        </tr>
        <tr>
            <td>1:00 AM</td>
            <td>Paper Airplane Contest</td>
        </tr>
        <tr>
            <td>8:00 AM</td>
            <td>Breakfast</td>
        </tr>
        <tr>
            <td>11:30 AM</td>
            <td>Hacking Ends & Judging Begins</td>
        </tr>
        <tr>
            <td>12:00 PM</td>
            <td>BobcatCTF Ends and Lunch</td>
        </tr>
        <tr>
            <td>2:00 PM</td>
            <td>Closing Ceremony</td>
        </tr>
    </table>
  )
}