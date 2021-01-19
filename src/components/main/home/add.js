import React from "react"

import { Section, Table, Row, HeadRow, ValWrap, SpecGroup, ValueLine, Para } from "../../common/wrappers"
import { Tooltip, Hover, TextArea, Upload, StyledInput, ShortInput, StyledSelect, StyledButton, Label } from "../../common/bubbles"
import { Add360, Add3D, AddPackaging, AddVectors, AddZfold, AddSheet, AddHighRes, DependenciesIcon, RadioIcon, AddPhoto } from "../../common/icons"

// let specKeys = Object.keys(specList["General Specs"])

fetch("http://localhost:3000/specList")
  .then(res => {
    console.log(res)
    return res.json()
  })
  .then(json => console.log(json))

const Add = () => (
  
  <Section>

    <HeadRow>
      <Para>
        <StyledButton disabled>Submit for Verification</StyledButton>
        <span>#123 v0.1 Device Name</span>
      </Para>
      <ValWrap>
        <ValueLine>
          <StyledInput type="text" placeholder="Enter device name" defaultValue=""></StyledInput>
          <a href="./fromBP">
            <StyledSelect>
              <option value="">Load values from...</option>
              <option value="">BluePad-50 v2</option>
            </StyledSelect>
          </a>
        </ValueLine>
      </ValWrap>
    </HeadRow>
    <Table>
      <SpecGroup>
        <Row>
          {/* <Para>
            <span>{specKeys[0]}</span>
          </Para> */}
          <Para>
            <span>Category Path</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <StyledSelect>
                <option value="">Pick category</option>
                {/* <option value="">{specList["General Specs"]["Category Path"]["Electronic Cash Registers"][0]}</option> */}
              </StyledSelect>
              <StyledSelect>
                <option value="">Pick subcategory</option>
                <option value="">PIN Pads</option>
              </StyledSelect>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <RadioIcon />
            <span>Color Availability</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <StyledSelect>
                <option value="">Pick color</option>
                <option value="">Black</option>
                <option value="">Dark grey</option>
                <option value="">White</option>
                <option value="">Ivory</option>
                <option value="">Custom (MOQ)</option>
              </StyledSelect>
              <StyledSelect>
                <option value="">Accent color</option>
                <option value="">Blue</option>
                <option value="">Purple</option>
              </StyledSelect>
              <Upload>
                <AddPhoto />
              </Upload>
              <StyledButton>+</StyledButton>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Description</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <TextArea rows="3" cols="36" placeholder="Describe device advantages">
              
              </TextArea>
            </ValueLine>
          </ValWrap>
        </Row>
      </SpecGroup>
      <SpecGroup>
        <Row>
          <Para>
            <span>CPU Model</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <StyledSelect>
                <option value="">Pick or write CPU model</option>
                <option value="">Other</option>
              </StyledSelect>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>CPU Memory</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <ShortInput type="number" size="7" placeholder="Amount"></ShortInput>
              <StyledSelect name="" id="">
                <option value="">Units</option>
                <option value="GB">GB</option>
                <option value="MB">MB</option>
                <option value="KB">KB</option>
              </StyledSelect>
              <StyledSelect name="" id="">
                <option value="">Type</option>
                <option value="RAM">RAM</option>
                <option value="ROM">ROM</option>
              </StyledSelect>
              <StyledButton>+</StyledButton>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>GPU Model</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <StyledSelect>
                <option value="">Pick or write GPU model</option>
                <option value="">Other</option>
              </StyledSelect>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Microcontroller</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <StyledSelect>
                <option value="">Pick or write MCU model</option>
                <option value="">Other</option>
              </StyledSelect>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>MCU Memory</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <ShortInput type="number" size="7" placeholder="Amount"></ShortInput>
              <StyledSelect name="" id="">
                <option value="">Units</option>
                <option value="GB">GB</option>
                <option value="MB">MB</option>
                <option value="KB">KB</option>
              </StyledSelect>
              <StyledSelect name="" id="">
                <option value="">Type</option>
                <option value="RAM">RAM</option>
                <option value="ROM">ROM</option>
              </StyledSelect>
              <StyledButton>+</StyledButton>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Operating System</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <StyledSelect>
                <option value="">Pick device OS</option>
                <option value="">Android 10 (Go edition)</option>
              </StyledSelect>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Main Camera</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <ShortInput type="number" size="7" placeholder="Amount" step=".1"></ShortInput>
              <span>MP</span>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Front Camera</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <ShortInput type="number" size="7" placeholder="Amount" step=".1"></ShortInput>
              <span>MP</span>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Buttons</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <ShortInput type="number" size="7" placeholder="Amount"></ShortInput>
              <StyledSelect>
                <option value="">Type</option>
                <option value="">On / Off</option>
                <option value="">Function</option>
                <option value="">Numeric</option>
                <option value="">Scan</option>
              </StyledSelect>
              <StyledButton>+</StyledButton>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Display</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <StyledSelect>
                <option value="">Pick display model</option>
                <option value="">128 × 32 px Backlit Monochrome LCD</option>
              </StyledSelect>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Customer Display</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <StyledSelect>
                <option value="">Pick secondary display</option>
                <option value="">128 × 32 px Backlit Monochrome LCD</option>
              </StyledSelect>
            </ValueLine>
          </ValWrap>
        </Row>
      </SpecGroup>
      <SpecGroup>
        <Row>
          <Para>
            <span>Max Item Database</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <ShortInput type="number" size="7" placeholder="Amount"></ShortInput>
              <span>items</span>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Item Name Length</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <ShortInput type="number" size="7" placeholder="Amount"></ShortInput>
              <span>characters</span>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Inventory Groups</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <ShortInput type="number" size="7" placeholder="Amount"></ShortInput>
              <span>groups</span>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Departments</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <ShortInput type="number" size="7" placeholder="Amount"></ShortInput>
              <span>departments</span>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Operators</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <ShortInput type="number" size="7" placeholder="Amount"></ShortInput>
              <span>operators</span>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Tax Groups</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <ShortInput type="number" size="7" placeholder="Amount"></ShortInput>
              <span>tax groups</span>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Fiscal Memory</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <ShortInput type="number" size="7" placeholder="Amount"></ShortInput>
              <span>reports</span>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Fiscal Journal</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <StyledSelect>
                <option value="">Pick journal type</option>
                <option value="">Electronic Journal SD card</option>
                <option value="">Secondary paper roll</option>
              </StyledSelect>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Modes</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <Label>
                <ShortInput type="checkbox" value="Restaurant ECR"></ShortInput>
                <span>Restaurant ECR</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="Store ECR"></ShortInput>
                <span>Store ECR</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="Fiscal Printer"></ShortInput>
                <span>Fiscal Printer</span>
              </Label>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Direct Link With</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <Label>
                <ShortInput type="checkbox" value="BluePad-50"></ShortInput>
                <span>BluePad-50</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="BluePad-55"></ShortInput>
                <span>BluePad-55</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="BluePad-5000"></ShortInput>
                <span>BluePad-5000</span>
              </Label>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Payment Types</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <Label>
                <ShortInput type="checkbox" value="Cash"></ShortInput>
                <span>Cash</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="Check"></ShortInput>
                <span>Check</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="Card"></ShortInput>
                <span>Card</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="Credit (programmable)"></ShortInput>
                <span>Credit (programmable)</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="Alternative Currency"></ShortInput>
                <span>Alternative Currency</span>
              </Label>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Max Number of Sales</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <ShortInput type="number" size="7" placeholder="Amount"></ShortInput>
              <span>per receipt</span>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>ECR Features</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <Label>
                <ShortInput type="checkbox" value="Receipt copy"></ShortInput>
                <span>Receipt copy</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="Pay-ins and pay-outs"></ShortInput>
                <span>Pay-ins and pay-outs</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="Change, discounts and surcharges"></ShortInput>
                <span>Change, discounts and surcharges</span>
              </Label>
            </ValueLine>
          </ValWrap>
        </Row>
      </SpecGroup>
      <SpecGroup>
        <Row>
          <Para>
            <span>Printing Mechanism</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <StyledSelect>
                <option value="">Pick or write model</option>
                <option value="">Direct line thermal printer</option>
                <option value="">Other</option>
              </StyledSelect>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Printing Resolution</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <StyledSelect>
                <option value="">Pick printer dpi</option>
                <option value="">203 × 203 dpi (8 × 8 dpmm)</option>
              </StyledSelect>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Printing Width</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <StyledSelect>
                <option value="">Pick width</option>
                <option value="">48 mm (384 dots)</option>
              </StyledSelect>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Printing Speed</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <ShortInput type="number" size="7" placeholder="Amount"></ShortInput>
              <StyledSelect>
                <option value="linespersec">lines per second</option>
                <option value="mmpersec">mm per second</option>
              </StyledSelect>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Printable Font Sizes</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <span>Font A</span>
              <StyledSelect name="" id="">
                <option value="">Pick font size</option>
                <option value="46cpl">9 × 16 dots (48 characters per line)</option>
                <option value="36cpl">12 × 24 dots (36 characters per line)</option>
              </StyledSelect>
              <StyledButton>+</StyledButton>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Loadable Font Sizes</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <span>Font A</span>
              <StyledSelect name="" id="">
                <option value="">Pick font size</option>
                <option value="46cpl">9 × 16 dots (48 characters per line)</option>
                <option value="36cpl">12 × 24 dots (36 characters per line)</option>
              </StyledSelect>
              <StyledButton>+</StyledButton>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Printable Logo</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <ShortInput type="number" size="7" placeholder="Amount"></ShortInput>
              <span>×</span>
              <ShortInput type="number" size="7" placeholder="Amount"></ShortInput>
              <span>dots</span>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Printable Barcode Types</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <Label>
                <ShortInput type="checkbox" value="EAN-8"></ShortInput>
                <span>EAN-8</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="EAN-13"></ShortInput>
                <span>EAN-13</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="Codabar"></ShortInput>
                <span>Codabar</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="Code 11"></ShortInput>
                <span>Code 11</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="Code 39"></ShortInput>
                <span>Code 39</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="Code 93"></ShortInput>
                <span>Code 93</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="Code 128"></ShortInput>
                <span>Code 128</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="DataMatrix"></ShortInput>
                <span>DataMatrix</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="GS1 Databar Expanded"></ShortInput>
                <span>GS1 Databar Expanded</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="GS1 Databar Limited"></ShortInput>
                <span>GS1 Databar Limited</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="GS1 Databar-14"></ShortInput>
                <span>GS1 Databar-14</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="GS1-128"></ShortInput>
                <span>GS1-128</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="Industrial 2 of 5"></ShortInput>
                <span>Industrial 2 of 5</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="Interleaved 2 of 5"></ShortInput>
                <span>Interleaved 2 of 5</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="ISBN"></ShortInput>
                <span>ISBN</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="ISSN"></ShortInput>
                <span>ISSN</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="ITF-14"></ShortInput>
                <span>ITF-14</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="ITF-6"></ShortInput>
                <span>ITF-6</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="Matrix 2 of 5"></ShortInput>
                <span>Matrix 2 of 5</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="QR Code"></ShortInput>
                <span>QR Code</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="Micro QR Code"></ShortInput>
                <span>Micro QR Code</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="MSI"></ShortInput>
                <span>MSI</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="PDF417"></ShortInput>
                <span>PDF417</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="UCP-A"></ShortInput>
                <span>UCP-A</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="UCP-E"></ShortInput>
                <span>UCP-E</span>
              </Label>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Paper Type</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <StyledSelect>
                <option value="">Pick paper type</option>
                <option value="">Thermal paper rolls</option>
                <option value="">Thermal label rolls</option>
              </StyledSelect>
              <StyledButton>+</StyledButton>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Paper Width</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <StyledSelect>
                <option value="">Pick paper width</option>
                <option value="">57 mm / 58 mm</option>
                <option value="">80 mm</option>
              </StyledSelect>
              <StyledButton>+</StyledButton>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Paper Thickness</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <span>min</span>
              <ShortInput type="number" size="7" placeholder="Amount"></ShortInput>
              <span>max</span>
              <ShortInput type="number" size="7" placeholder="Amount"></ShortInput>
              <span>µm</span>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Max Roll Diameter</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <ShortInput type="number" size="7" placeholder="Amount"></ShortInput>
              <span>mm</span>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Paper Loading</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <StyledSelect>
                <option value="">Pick loading type</option>
                <option value="">Drop-In</option>
              </StyledSelect>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Emulation</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <StyledSelect>
                <option value="">Pick emulation</option>
                <option value="">ESC/POS</option>
              </StyledSelect>
            </ValueLine>
          </ValWrap>
        </Row>
      </SpecGroup>
      <SpecGroup>
        <Row>
          <Para>
            <span>Magnetic Card Reader</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <StyledSelect>
                <option value="">Pick stripe reader type</option>
                <option value="">Triple track bi-directional</option>
              </StyledSelect>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Smart Card Reader</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <StyledSelect>
                <option value="">Pick smart card reader type</option>
                <option value="">Landing</option>
              </StyledSelect>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Contactless Reader</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <StyledSelect>
                <option value="">Pick contactless reader type</option>
                <option value="">RFID reader</option>
                <option value="">UHF reader</option>
              </StyledSelect>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Contactless Payments</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <Label>
                <ShortInput type="checkbox" value="VISA payWave"></ShortInput>
                <span>VISA payWave</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="MasterCard PayPass"></ShortInput>
                <span>MasterCard PayPass</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="American Express"></ShortInput>
                <span>American Express</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="DPAS (Discover)"></ShortInput>
                <span>DPAS (Discover)</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="J/Speedy (JCB)"></ShortInput>
                <span>J/Speedy (JCB)</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="China UnionPay"></ShortInput>
                <span>China UnionPay</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="Interac (Canada)"></ShortInput>
                <span>Interac (Canada)</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="Gemalto PURE"></ShortInput>
                <span>Gemalto PURE</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="Common.SECC"></ShortInput>
                <span>Common.SECC</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="MIR (Russia)"></ShortInput>
                <span>MIR (Russia)</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="RuPay (India)"></ShortInput>
                <span>RuPay (India)</span>
              </Label>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <RadioIcon />
            <span>Barcode Reader</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <StyledSelect>
                <option value="">Pick scan engine</option>
                <option value="">1D Opticon MDL-1000 Laser Scan Engine</option>
                <option value="">2D Newland EM3096 - 752 × 480 CMOS</option>
                <option value="">2D Newland EM3396 - 752 × 480 CMOS</option>
                <option value="">2D Newland EM3296 - 640 × 480 CMOS</option>
                <option value="">2D Opticon MDI-4000 - 640 × 480 CMOS</option>
                <option value="">2D Honeywell N6600 SR - 844 × 640 CMOS</option>
                <option value="">2D Honeywell N6600 MR - 844 × 640 CMOS</option>
                <option value="">2D Zebra SE4710 - 1280 × 800 CMOS</option>
                <option value="">2D Zebra SE4750 SR - 1280 × 960 CMOS</option>
                <option value="">2D Zebra SE4750 MR - 1280 × 960 CMOS</option>
              </StyledSelect>
              <StyledButton>+</StyledButton>
            </ValueLine>
          </ValWrap>
        </Row>
      </SpecGroup>
      <SpecGroup>
        <Row>
          <Para>
            <span>Connectors</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <ShortInput type="number" size="7" placeholder="Amount"></ShortInput>
              <span>×</span>
              <StyledSelect>
                <option value="">Pick connector</option>
                <option value="">SIM</option>
                <option value="">SAM</option>
                <option value="">USB</option>
                <option value="">Lightning</option>
                <option value="">RS-232</option>
              </StyledSelect>
              <StyledSelect>
                <option value="">Type</option>
                <option value="">Type-C port</option>
                <option value="">micro port</option>
                <option value="">mini port</option>
                <option value="">mini plug</option>
                <option value="">Type-A port</option>
                <option value="">Type-B port</option>
              </StyledSelect>
              <Label>
                <ShortInput type="checkbox" value="Opt."></ShortInput>
                <span>Opt.</span>
              </Label>
              <StyledButton>+</StyledButton>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Wired Communication</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <StyledSelect>
                <option value="">Pick communication type</option>
                <option value="">USB (non-host)</option>
              </StyledSelect>
              <StyledButton>+</StyledButton>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>OS Compatibility</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <Label>
                <ShortInput type="checkbox" value="Android"></ShortInput>
                <span>Android</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="Windows"></ShortInput>
                <span>Windows</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="iOS"></ShortInput>
                <span>iOS</span>
              </Label>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <RadioIcon />
            <span>Device Compatibility</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <StyledSelect>
                <option value="">Pick device</option>
                <option value="">iPhone XR</option>
                <option value="">iPhone SE</option>
                <option value="">iPhone 11</option>
                <option value="">iPhone XS</option>
                <option value="">iPhone XS Max</option>
              </StyledSelect>
              <StyledButton>+</StyledButton>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <RadioIcon />
            <StyledButton>
              <DependenciesIcon />
            </StyledButton>
            <span>Bluetooth</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <StyledSelect>
                <option value="">Pick BT version</option>
                <option value="">version 5.0</option>
                <option value="">version 4.2</option>
                <option value="">version 3.0</option>
              </StyledSelect>
              <Label>
                <ShortInput type="checkbox" value="LE"></ShortInput>
                <span>LE</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="HS"></ShortInput>
                <span>HS</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="EDR"></ShortInput>
                <span>EDR</span>
              </Label>
              <StyledButton>+</StyledButton>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <StyledButton>
              <DependenciesIcon />
            </StyledButton>
            <span>Wireless</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <StyledSelect>
                <option value="">Pick Wi-Fi support</option>
                <option value="">IEEE 802.11 b/g/n</option>
                <option value="">IEEE 802.11 a/b/g/n</option>
                <option value="">IEEE 802.11 a/b/g/n/ac</option>
              </StyledSelect>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <RadioIcon />
            <span>Modem</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <StyledSelect>
                <option value="">Pick modem communication</option>
                <option value="">3G communication</option>
                <option value="">2G communication</option>
              </StyledSelect>
              <StyledButton>+</StyledButton>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>GNSS</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <Label>
                <ShortInput type="checkbox" value="GPS"></ShortInput>
                <span>GPS</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="A-GPS"></ShortInput>
                <span>A-GPS</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="BeiDou"></ShortInput>
                <span>BeiDou</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="GLONASS"></ShortInput>
                <span>GLONASS</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="Galileo"></ShortInput>
                <span>Galileo</span>
              </Label>
            </ValueLine>
          </ValWrap>
        </Row>
      </SpecGroup>
      <SpecGroup>
        <Row>
          <Para>
            <span>Sensors</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <Label>
                <ShortInput type="checkbox" value="Accelerometer"></ShortInput>
                <span>Accelerometer</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="Gyroscope"></ShortInput>
                <span>Gyroscope</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="Proximity sensor"></ShortInput>
                <span>Proximity sensor</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="Black mark"></ShortInput>
                <span>Black mark</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="Label gap"></ShortInput>
                <span>Label gap</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="Peeled label"></ShortInput>
                <span>Peeled label</span>
              </Label>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>LED Indication</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <Label>
                <ShortInput type="checkbox" value="Payment status"></ShortInput>
                <span>Payment status</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="Battery status"></ShortInput>
                <span>Battery status</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="Device status"></ShortInput>
                <span>Device status</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="Paper end"></ShortInput>
                <span>Paper end</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="Cover open"></ShortInput>
                <span>Cover open</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="Overheating"></ShortInput>
                <span>Overheating</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="Auto cutter error"></ShortInput>
                <span>Auto cutter error</span>
              </Label>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Audio Features</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <Label>
                <ShortInput type="checkbox" value="Microphone"></ShortInput>
                <span>Microphone</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="Phone speaker"></ShortInput>
                <span>Phone speaker</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="Electromagnetic buzzer"></ShortInput>
                <span>Electromagnetic buzzer</span>
              </Label>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Vibration Capabilities</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <ShortInput type="number" size="7" placeholder="Amount"></ShortInput>
              <span>rpm</span>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Other Features</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <Label>
                <ShortInput type="checkbox" value="Auto cutter"></ShortInput>
                <span>Auto cutter</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="Peeler"></ShortInput>
                <span>Peeler</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="Receipt copy"></ShortInput>
                <span>Receipt copy</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="Pay-ins and pay-outs"></ShortInput>
                <span>Pay-ins and pay-outs</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="Change, discounts and surcharges"></ShortInput>
                <span>Change, discounts and surcharges</span>
              </Label>
            </ValueLine>
          </ValWrap>
        </Row>
      </SpecGroup>
      <SpecGroup>
        <Row>
          <Para>
            <span>Power Supply</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <StyledSelect>
                <option value="">Pick supply</option>
                <option value="">DC 9 V, 1 A</option>
                <option value="">DC 5 V, USB</option>
                <option value="">DC 5 V, contact pins</option>
              </StyledSelect>
              <StyledButton>+</StyledButton>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Battery</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <StyledSelect>
                <option value="">Battery type</option>
                <option value="">Li-Ion</option>
                <option value="">Li-Po</option>
              </StyledSelect>
              <ShortInput type="number" size="7" placeholder="Amount" step="0.1"></ShortInput>
              <span>V,</span>
              <ShortInput type="number" size="7" placeholder="Amount" step="10"></ShortInput>
              <span>mAh</span>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Reliability</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <StyledSelect>
                <option value="">Pick value</option>
                <option value="">50 km (thermal head)</option>
                <option value="">1,000,000 magnetic card swipes</option>
                <option value="">500,000 chip card cycles</option>
                <option value="">20,000 lines with one charge</option>
              </StyledSelect>
              <StyledButton>+</StyledButton>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Certificates</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <Label>
                <ShortInput type="checkbox" value="CE"></ShortInput>
                <span>CE</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="FCC"></ShortInput>
                <span>FCC</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="ROHS"></ShortInput>
                <span>ROHS</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="CB"></ShortInput>
                <span>CB</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="BIS"></ShortInput>
                <span>BIS</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="UN38.3"></ShortInput>
                <span>UN38.3</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="PCI PTS 5.x SRED"></ShortInput>
                <span>PCI PTS 5.x SRED</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="PCI PTS 4.x"></ShortInput>
                <span>PCI PTS 4.x</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="EMV Level 1"></ShortInput>
                <span>EMV Level 1</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="EMV Level 2"></ShortInput>
                <span>EMV Level 2</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="EMV Level 1 Contactless"></ShortInput>
                <span>EMV Level 1 Contactless</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" value="Apple Mfi"></ShortInput>
                <span>Apple Mfi</span>
              </Label>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Dimensions W × D × H</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <ShortInput type="number" size="7" placeholder="Amount"></ShortInput>
              <span>×</span>
              <ShortInput type="number" size="7" placeholder="Amount"></ShortInput>
              <span>×</span>
              <ShortInput type="number" size="7" placeholder="Amount"></ShortInput>
              <span>mm</span>
              <Upload>
                <AddPhoto />
              </Upload>
              <Hover>
                <Tooltip>Upload map of device dimensions</Tooltip>
                <StyledButton>?</StyledButton>
              </Hover>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Weight</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <ShortInput type="number" size="7" placeholder="Amount"></ShortInput>
              <span>g</span>
              <Hover>
                <Tooltip>Device only, no loaded consumables.</Tooltip>
                <StyledButton>?</StyledButton>
              </Hover>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Operational Temperature</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <ShortInput type="number" size="7" placeholder="Amount"></ShortInput>
              <span>°C to</span>
              <ShortInput type="number" size="7" placeholder="Amount"></ShortInput>
              <span>°C /</span>
              <ShortInput type="number" size="7" placeholder="Amount"></ShortInput>
              <span>to</span>
              <ShortInput type="number" size="7" placeholder="Amount"></ShortInput>
              <span>% RH</span>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Storage Temperature</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <ShortInput type="number" size="7" placeholder="Amount"></ShortInput>
              <span>°C to</span>
              <ShortInput type="number" size="7" placeholder="Amount"></ShortInput>
              <span>°C /</span>
              <ShortInput type="number" size="7" placeholder="Amount"></ShortInput>
              <span>to</span>
              <ShortInput type="number" size="7" placeholder="Amount"></ShortInput>
              <span>% RH</span>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Drop Tested</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <span>faces and edges from</span>
              <ShortInput type="number" size="7" placeholder="Amount" step=".01"></ShortInput>
              <span>m</span>
            </ValueLine>
          </ValWrap>
        </Row>
      </SpecGroup>
      <SpecGroup>
        <Row>
          <Para>
            <span>Other Box Contents</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <StyledSelect>
                <option value="">Pick item</option>
                <option value="">Cable, 1 m, USB Type-A plug to USB Type-C plug</option>
                <option value="">Cable, 0.9 m, USB Type-A plug to USB micro plug</option>
              </StyledSelect>
              <Label>
                <ShortInput type="checkbox" value="Opt."></ShortInput>
                <span>Opt.</span>
              </Label>
              <StyledButton>+</StyledButton>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Compatible Accessories</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <StyledSelect>
                <option value="">Pick item</option>
                <option value="">Holster</option>
                <option value="">PIN shield</option>
                <option value="">Charging stand</option>
              </StyledSelect>
              <StyledButton>+</StyledButton>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Related Products</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <StyledSelect>
                <option value="">Pick product</option>
              </StyledSelect>
              <StyledButton>+</StyledButton>
            </ValueLine>
          </ValWrap>
        </Row>
      </SpecGroup>
      <SpecGroup>
        <Row>
          <Para>
            <span>Screen Only Images</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <Upload>
                <AddPhoto />
              </Upload>
              <span>.jpg</span>
              <Upload>
                <AddPhoto />
              </Upload>
              <span>.png</span>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>High Res RGB</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <Upload>
                <AddHighRes />
              </Upload>
              <span>.jpg</span>
              <Upload>
                <AddHighRes />
              </Upload>
              <span>.png</span>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>A4 Spec Sheet</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <Upload>
                <AddSheet />
              </Upload>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Z-fold Preview</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <Upload>
                <AddZfold />
              </Upload>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Vector Shapes</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <Upload>
                <AddVectors />
              </Upload>
              <StyledButton>+</StyledButton>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Packaging Prints</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <Upload>
                <AddPackaging />
              </Upload>
              <StyledButton>+</StyledButton>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>360 View</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <Upload>
                <Add360 />
              </Upload>
              <StyledButton>+</StyledButton>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>3D Model</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <Upload>
                <Add3D />
              </Upload>
              <StyledButton>+</StyledButton>
            </ValueLine>
          </ValWrap>
        </Row>
      </SpecGroup>
    </Table>
  </Section>
)

export default Add

