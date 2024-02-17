"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[51892],{267458:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-108c5e04","path":"/devices/ZK03840.html","title":"Viessmann ZK03840 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Viessmann ZK03840 control via MQTT","description":"Integrate your Viessmann ZK03840 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-04-29T17:11:59.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Installing the TRV","slug":"installing-the-trv","link":"#installing-the-trv","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Window open (binary)","slug":"window-open-binary","link":"#window-open-binary","children":[]},{"level":3,"title":"Window open force (binary)","slug":"window-open-force-binary","link":"#window-open-force-binary","children":[]},{"level":3,"title":"Keypad lockout (enum)","slug":"keypad-lockout-enum","link":"#keypad-lockout-enum","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1708171404000},"filePathRelative":"devices/ZK03840.md"}')},428145:(e,t,o)=>{o.r(t),o.d(t,{default:()=>b});var i=o(166252);const d=(0,i._)("h1",{id:"viessmann-zk03840",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#viessmann-zk03840","aria-hidden":"true"},"#"),(0,i.Uk)(" Viessmann ZK03840")],-1),a=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),n=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"ZK03840")],-1),l=(0,i._)("td",null,"Vendor",-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"ViCare radiator thermostat valve")],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"climate (occupied_heating_setpoint, local_temperature, system_mode, schedule), window_open, window_open_force, keypad_lockout, battery, linkquality")],-1),r=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZK03840.png",alt:"Viessmann ZK03840"})])],-1),u=(0,i.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="installing-the-trv" tabindex="-1"><a class="header-anchor" href="#installing-the-trv" aria-hidden="true">#</a> Installing the TRV</h3><ul><li>install the correct adaptor on the valve</li><li>open cover (push clip on bottom and push front side to slide open)</li><li>insert batteries (<code>--</code> should be on the display)</li><li>press the button on the top (<code>--</code> + <code>((•))</code> should be on the display)</li><li>wait for the device to pair, it took about 2 minutes for me to get the success message in Zigbee2MQTT</li><li>install the TRV on the adaptor (push hard until you feel a click, rotate the TRV until display faces up)</li><li>press the button on the top for 3 seconds (motor will turn, <code>21°</code> + <code>((•))</code> should be on the display)</li><li>close the cover</li></ul>',3),h=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),p=(0,i.uE)('<ul><li><p><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></p></li><li><p><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>schedule</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>7</code> and <code>30</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>heat</code>, <code>sleep</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li></ul><h3 id="window-open-binary" tabindex="-1"><a class="header-anchor" href="#window-open-binary" aria-hidden="true">#</a> Window open (binary)</h3><p>Detected by sudden temperature drop or set manually.. Value can be found in the published state on the <code>window_open</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;window_open&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>true</code> window open is ON, if <code>false</code> OFF.</p><h3 id="window-open-force-binary" tabindex="-1"><a class="header-anchor" href="#window-open-force-binary" aria-hidden="true">#</a> Window open force (binary)</h3><p>Manually set window_open, ~1 minute to take affect.. Value can be found in the published state on the <code>window_open_force</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;window_open_force&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;window_open_force&quot;: NEW_VALUE}</code>. If value equals <code>true</code> window open force is ON, if <code>false</code> OFF.</p><h3 id="keypad-lockout-enum" tabindex="-1"><a class="header-anchor" href="#keypad-lockout-enum" aria-hidden="true">#</a> Keypad lockout (enum)</h3><p>Enables/disables physical input on the device. Value can be found in the published state on the <code>keypad_lockout</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;keypad_lockout&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;keypad_lockout&quot;: NEW_VALUE}</code>. The possible values are: <code>unlock</code>, <code>lock1</code>, <code>lock2</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',15),m={},b=(0,o(983744).Z)(m,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),d,(0,i._)("table",null,[a,(0,i._)("tbody",null,[n,(0,i._)("tr",null,[l,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=Viessmann"},{default:(0,i.w5)((()=>[(0,i.Uk)("Viessmann")])),_:1})])]),c,s,r])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,(0,i.kq)(" Notes END: Do not edit below this line "),h,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),p])}]])}}]);