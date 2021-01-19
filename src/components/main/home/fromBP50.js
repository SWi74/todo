import React from "react"

import { Section, Table, Row, HeadRow, ValWrap, SpecGroup, ValueLine, Para } from "../../common/wrappers"
import { Tooltip, Hover, TextArea, Upload, StyledInput, ShortInput, StyledSelect, StyledButton, LoadedButton, Label, BubbleSpan } from "../../common/bubbles"
import { Add360, Add3D, AddPackaging, AddVectors, AddHighRes, CloseIcon, DependenciesIcon, RadioIcon, AddPhoto } from "../../common/icons"
import BP50B from "../../../files/BP50B.jpg"
import BP50W from "../../../files/BP50W.jpg"
import WDHBP50 from "../../../files/WDHBP50.jpg"

const FromBP = () => (
  <Section>

    <HeadRow>
      <Para>
        <StyledButton disabled>Submit for Verification</StyledButton>
        <span>#123 v0.1 Device Name</span>
      </Para>
      <ValWrap>
        <ValueLine>
          <StyledInput type="text" placeholder="Enter device name" defaultValue=""></StyledInput>
          <a href="./add">
            <LoadedButton>
              <span>BluePad-50 v2</span>
              <CloseIcon />
            </LoadedButton>
          </a>
        </ValueLine>
      </ValWrap>
    </HeadRow>
    <Table>
      <SpecGroup>
        <Row>
          <Para>
            <span>Category Path</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <StyledSelect from="true" defaultValue="Payment Terminals">
                <option value="">Pick category</option>
                <option value="">Payment Terminals</option>
              </StyledSelect>
              <StyledSelect from="true" defaultValue="PIN Pads">
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
              <BubbleSpan from="true">
                <span>Black</span>
                <CloseIcon />
              </BubbleSpan>
              <BubbleSpan bg={BP50B} from="true">
                <CloseIcon />
              </BubbleSpan>
              <Upload>
                <AddPhoto />
              </Upload>
            </ValueLine>
            <ValueLine>
              <BubbleSpan from="true">
                <span>White</span>
                <CloseIcon />
              </BubbleSpan>
              <BubbleSpan bg={BP50W} from="true">
                <CloseIcon />
              </BubbleSpan>
              <Upload>
                <AddPhoto />
              </Upload>
            </ValueLine>
            <ValueLine>
              <BubbleSpan from="true">
                <span>Custom (MOQ: 500)</span>
                <CloseIcon />
              </BubbleSpan>
            </ValueLine>
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
              <TextArea rows="3" cols="36" placeholder="Describe device advantages" from="true" defaultValue="BluePad-50 v2 is a compact, lightweight Bluetooth-enabled payment solution. It accepts magnetic stripe, EMV Chip and PIN and Contactless cards, delivering all payment options in the palm of your hand.">
              
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
              <ShortInput type="number" size="7" placeholder="Amount" defaultValue=""></ShortInput>
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
              <BubbleSpan from="true">
                <span>1 On / Off</span>
                <CloseIcon />
              </BubbleSpan>
            </ValueLine>
            <ValueLine>
              <BubbleSpan from="true">
                <span>10 numeric</span>
                <CloseIcon />
              </BubbleSpan>
            </ValueLine>
            <ValueLine>
              <BubbleSpan from="true">
                <span>5 function</span>
                <CloseIcon />
              </BubbleSpan>
            </ValueLine>
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
              <StyledSelect from="true" defaultValue="128 × 32 px Backlit Monochrome LCD">
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
                <ShortInput type="checkbox" defaultValue="Restaurant ECR"></ShortInput>
                <span>Restaurant ECR</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="Store ECR"></ShortInput>
                <span>Store ECR</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="Fiscal Printer"></ShortInput>
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
                <ShortInput type="checkbox" defaultValue="BluePad-50"></ShortInput>
                <span>BluePad-50</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="BluePad-55"></ShortInput>
                <span>BluePad-55</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="BluePad-5000"></ShortInput>
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
                <ShortInput type="checkbox" defaultValue="Cash"></ShortInput>
                <span>Cash</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="Check"></ShortInput>
                <span>Check</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="Card"></ShortInput>
                <span>Card</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="Credit (programmable)"></ShortInput>
                <span>Credit (programmable)</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="Alternative Currency"></ShortInput>
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
                <ShortInput type="checkbox" defaultValue="Receipt copy"></ShortInput>
                <span>Receipt copy</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="Pay-ins and pay-outs"></ShortInput>
                <span>Pay-ins and pay-outs</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="Change, discounts and surcharges"></ShortInput>
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
                <ShortInput type="checkbox" defaultValue="EAN-8"></ShortInput>
                <span>EAN-8</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="EAN-13"></ShortInput>
                <span>EAN-13</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="Codabar"></ShortInput>
                <span>Codabar</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="Code 11"></ShortInput>
                <span>Code 11</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="Code 39"></ShortInput>
                <span>Code 39</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="Code 93"></ShortInput>
                <span>Code 93</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="Code 128"></ShortInput>
                <span>Code 128</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="DataMatrix"></ShortInput>
                <span>DataMatrix</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="GS1 Databar Expanded"></ShortInput>
                <span>GS1 Databar Expanded</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="GS1 Databar Limited"></ShortInput>
                <span>GS1 Databar Limited</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="GS1 Databar-14"></ShortInput>
                <span>GS1 Databar-14</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="GS1-128"></ShortInput>
                <span>GS1-128</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="Industrial 2 of 5"></ShortInput>
                <span>Industrial 2 of 5</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="Interleaved 2 of 5"></ShortInput>
                <span>Interleaved 2 of 5</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="ISBN"></ShortInput>
                <span>ISBN</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="ISSN"></ShortInput>
                <span>ISSN</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="ITF-14"></ShortInput>
                <span>ITF-14</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="ITF-6"></ShortInput>
                <span>ITF-6</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="Matrix 2 of 5"></ShortInput>
                <span>Matrix 2 of 5</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="QR Code"></ShortInput>
                <span>QR Code</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="Micro QR Code"></ShortInput>
                <span>Micro QR Code</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="MSI"></ShortInput>
                <span>MSI</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="PDF417"></ShortInput>
                <span>PDF417</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="UCP-A"></ShortInput>
                <span>UCP-A</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="UCP-E"></ShortInput>
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
              <StyledSelect from="true" defaultValue="Triple track bi-directional">
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
              <StyledSelect from="true" defaultValue="Landing">
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
              <StyledSelect from="true" defaultValue="RFID reader">
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
              <Label from="true">
                <ShortInput type="checkbox" defaultValue="VISA payWave" defaultChecked></ShortInput>
                <span>VISA payWave</span>
              </Label>
              <Label from="true">
                <ShortInput type="checkbox" defaultValue="MasterCard PayPass" defaultChecked></ShortInput>
                <span>MasterCard PayPass</span>
              </Label>
              <Label from="true">
                <ShortInput type="checkbox" defaultValue="American Express" defaultChecked></ShortInput>
                <span>American Express</span>
              </Label>
              <Label from="true">
                <ShortInput type="checkbox" defaultValue="DPAS (Discover)" defaultChecked></ShortInput>
                <span>DPAS (Discover)</span>
              </Label>
              <Label from="true">
                <ShortInput type="checkbox" defaultValue="J/Speedy (JCB)" defaultChecked></ShortInput>
                <span>J/Speedy (JCB)</span>
              </Label>
              <Label from="true">
                <ShortInput type="checkbox" defaultValue="China UnionPay" defaultChecked></ShortInput>
                <span>China UnionPay</span>
              </Label>
              <Label from="true">
                <ShortInput type="checkbox" defaultValue="Interac (Canada)" defaultChecked></ShortInput>
                <span>Interac (Canada)</span>
              </Label>
              <Label from="true">
                <ShortInput type="checkbox" defaultValue="Gemalto PURE" defaultChecked></ShortInput>
                <span>Gemalto PURE</span>
              </Label>
              <Label from="true">
                <ShortInput type="checkbox" defaultValue="Common.SECC" defaultChecked></ShortInput>
                <span>Common.SECC</span>
              </Label>
              <Label from="true">
                <ShortInput type="checkbox" defaultValue="MIR (Russia)" defaultChecked></ShortInput>
                <span>MIR (Russia)</span>
              </Label>
              <Label from="true">
                <ShortInput type="checkbox" defaultValue="RuPay (India)" defaultChecked></ShortInput>
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
              <BubbleSpan from="true">
                <span>1 USB micro port</span>
                <CloseIcon />
              </BubbleSpan>
              <Label>
                <ShortInput type="checkbox" defaultValue="Opt."></ShortInput>
                <span>Opt.</span>
              </Label>
            </ValueLine>
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
                <ShortInput type="checkbox" defaultValue="Opt."></ShortInput>
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
              <BubbleSpan from="true">
                <span>USB</span>
                <CloseIcon />
              </BubbleSpan>
            </ValueLine>
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
              <Label from="true">
                <ShortInput type="checkbox" defaultValue="Android" defaultChecked></ShortInput>
                <span>Android</span>
              </Label>
              <Label from="true">
                <ShortInput type="checkbox" defaultValue="Windows" defaultChecked></ShortInput>
                <span>Windows</span>
              </Label>
              <Label from="true">
                <ShortInput type="checkbox" defaultValue="iOS" defaultChecked></ShortInput>
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
              <BubbleSpan from="true">
                <span>version 3.0</span>
                <CloseIcon />
              </BubbleSpan>
            </ValueLine>
            <ValueLine>
              <StyledSelect>
                <option value="">Pick BT version</option>
                <option value="">version 5.0</option>
                <option value="">version 4.2</option>
                <option value="">version 3.0</option>
              </StyledSelect>
              <Label>
                <ShortInput type="checkbox" defaultValue="LE"></ShortInput>
                <span>LE</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="HS"></ShortInput>
                <span>HS</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="EDR"></ShortInput>
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
                <ShortInput type="checkbox" defaultValue="GPS"></ShortInput>
                <span>GPS</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="A-GPS"></ShortInput>
                <span>A-GPS</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="BeiDou"></ShortInput>
                <span>BeiDou</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="GLONASS"></ShortInput>
                <span>GLONASS</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="Galileo"></ShortInput>
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
                <ShortInput type="checkbox" defaultValue="Accelerometer"></ShortInput>
                <span>Accelerometer</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="Gyroscope"></ShortInput>
                <span>Gyroscope</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="Proximity sensor"></ShortInput>
                <span>Proximity sensor</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="Black mark"></ShortInput>
                <span>Black mark</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="Label gap"></ShortInput>
                <span>Label gap</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="Peeled label"></ShortInput>
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
              <Label from="true">
                <ShortInput type="checkbox" defaultValue="Payment status" defaultChecked></ShortInput>
                <span>Payment status</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="Battery status"></ShortInput>
                <span>Battery status</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="Device status"></ShortInput>
                <span>Device status</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="Paper end"></ShortInput>
                <span>Paper end</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="Cover open"></ShortInput>
                <span>Cover open</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="Overheating"></ShortInput>
                <span>Overheating</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="Auto cutter error"></ShortInput>
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
                <ShortInput type="checkbox" defaultValue="Microphone"></ShortInput>
                <span>Microphone</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="Phone speaker"></ShortInput>
                <span>Phone speaker</span>
              </Label>
              <Label from="true">
                <ShortInput type="checkbox" defaultValue="Electromagnetic buzzer" defaultChecked></ShortInput>
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
                <ShortInput type="checkbox" defaultValue="Auto cutter"></ShortInput>
                <span>Auto cutter</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="Peeler"></ShortInput>
                <span>Peeler</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="Receipt copy"></ShortInput>
                <span>Receipt copy</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="Pay-ins and pay-outs"></ShortInput>
                <span>Pay-ins and pay-outs</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="Change, discounts and surcharges"></ShortInput>
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
              <BubbleSpan from="true">
                <span>DC 5 V, USB</span>
                <CloseIcon />
              </BubbleSpan>
            </ValueLine>
            <ValueLine>
              <BubbleSpan from="true">
                <span>DC 5 V, contact pins</span>
                <CloseIcon />
              </BubbleSpan>
            </ValueLine>
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
              <StyledSelect from="true" defaultValue="Li-Po">
                <option value="">Battery type</option>
                <option value="">Li-Ion</option>
                <option value="">Li-Po</option>
              </StyledSelect>
              <ShortInput type="number" size="7" placeholder="Amount" step="0.1" from="true" defaultValue="3.7"></ShortInput>
              <span>V,</span>
              <ShortInput type="number" size="7" placeholder="Amount" step="10" from="true" defaultValue="620"></ShortInput>
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
              <BubbleSpan from="true">
                <span>500,000 chip card cycles</span>
                <CloseIcon />
              </BubbleSpan>
            </ValueLine>
            <ValueLine>
              <BubbleSpan from="true">
                <span>1,000,000 magnetic card swipes</span>
                <CloseIcon />
              </BubbleSpan>
            </ValueLine>
            <ValueLine>
              <BubbleSpan from="true">
                <span>1,000,000 button clicks</span>
                <CloseIcon />
              </BubbleSpan>
            </ValueLine>
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
              <Label from="true">
                <ShortInput type="checkbox" defaultValue="CE" defaultChecked></ShortInput>
                <span>CE</span>
              </Label>
              <Label from="true">
                <ShortInput type="checkbox" defaultValue="FCC" defaultChecked></ShortInput>
                <span>FCC</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="ROHS"></ShortInput>
                <span>ROHS</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="CB"></ShortInput>
                <span>CB</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="BIS"></ShortInput>
                <span>BIS</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="UN38.3"></ShortInput>
                <span>UN38.3</span>
              </Label>
              <Label>
                <ShortInput type="checkbox" defaultValue="PCI PTS 5.x SRED"></ShortInput>
                <span>PCI PTS 5.x SRED</span>
              </Label>
              <Label from="true">
                <ShortInput type="checkbox" defaultValue="PCI PTS 4.x" defaultChecked></ShortInput>
                <span>PCI PTS 4.x</span>
              </Label>
              <Label from="true">
                <ShortInput type="checkbox" defaultValue="EMV Level 1" defaultChecked></ShortInput>
                <span>EMV Level 1</span>
              </Label>
              <Label from="true">
                <ShortInput type="checkbox" defaultValue="EMV Level 2" defaultChecked></ShortInput>
                <span>EMV Level 2</span>
              </Label>
              <Label from="true">
                <ShortInput type="checkbox" defaultValue="EMV Level 1 Contactless" defaultChecked></ShortInput>
                <span>EMV Level 1 Contactless</span>
              </Label>
              <Label from="true">
                <ShortInput type="checkbox" defaultValue="Apple Mfi" defaultChecked></ShortInput>
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
              <ShortInput type="number" size="7" placeholder="Amount" from="true" defaultValue="69"></ShortInput>
              <span>×</span>
              <ShortInput type="number" size="7" placeholder="Amount" from="true" defaultValue="110"></ShortInput>
              <span>×</span>
              <ShortInput type="number" size="7" placeholder="Amount" from="true" defaultValue="17"></ShortInput>
              <span>mm</span>
              <BubbleSpan bg={WDHBP50} from="true">
                <CloseIcon />
              </BubbleSpan>
              <Hover>
                <Tooltip bg={WDHBP50} from="true"></Tooltip>
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
              <ShortInput type="number" size="7" placeholder="Amount" from="true" defaultValue="123"></ShortInput>
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
              <ShortInput type="number" size="7" placeholder="Amount" from="true" defaultValue="-10"></ShortInput>
              <span>°C to</span>
              <ShortInput type="number" size="7" placeholder="Amount" from="true" defaultValue="45"></ShortInput>
              <span>°C /</span>
              <ShortInput type="number" size="7" placeholder="Amount" from="true" defaultValue="5"></ShortInput>
              <span>to</span>
              <ShortInput type="number" size="7" placeholder="Amount" from="true" defaultValue="90"></ShortInput>
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
              <ShortInput type="number" size="7" placeholder="Amount" from="true" defaultValue="-15"></ShortInput>
              <span>°C to</span>
              <ShortInput type="number" size="7" placeholder="Amount" from="true" defaultValue="55"></ShortInput>
              <span>°C /</span>
              <ShortInput type="number" size="7" placeholder="Amount" from="true" defaultValue="5"></ShortInput>
              <span>to</span>
              <ShortInput type="number" size="7" placeholder="Amount" from="true" defaultValue="90"></ShortInput>
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
              <ShortInput type="number" size="7" placeholder="Amount" step=".01" from="true" defaultValue="1.5"></ShortInput>
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
              <BubbleSpan from="true">
                <span>Cable, 0.9 m, USB Type-A plug to USB micro plug</span>
                <CloseIcon />
              </BubbleSpan>
              <Label>
                <ShortInput type="checkbox" defaultValue="Opt."></ShortInput>
                <span>Opt.</span>
              </Label>
            </ValueLine>
            <ValueLine>
              <StyledSelect>
                <option value="">Pick item</option>
                <option value="">Cable, 1 m, USB Type-A plug to USB Type-C plug</option>
                <option value="">Cable, 0.9 m, USB Type-A plug to USB micro plug</option>
              </StyledSelect>
              <Label>
                <ShortInput type="checkbox" defaultValue="Opt."></ShortInput>
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
              <BubbleSpan from="true">
                <span>Charger (GT1)</span>
                <CloseIcon />
              </BubbleSpan>
            </ValueLine>
            <ValueLine>
              <BubbleSpan from="true">
                <span>5-unit charger (GT5)</span>
                <CloseIcon />
              </BubbleSpan>
            </ValueLine>
            <ValueLine>
              <BubbleSpan from="true">
                <span>Power Stand (DST-50)</span>
                <CloseIcon />
              </BubbleSpan>
            </ValueLine>
            <ValueLine>
              <BubbleSpan from="true">
                <span>Holster</span>
                <CloseIcon />
              </BubbleSpan>
            </ValueLine>
            <ValueLine>
              <BubbleSpan from="true">
                <span>Privacy shield</span>
                <CloseIcon />
              </BubbleSpan>
            </ValueLine>
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
              <BubbleSpan from="true">
                <span>DP-150</span>
                <CloseIcon />
              </BubbleSpan>
            </ValueLine>
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
              <BubbleSpan bg={BP50B} from="true">
                <CloseIcon />
              </BubbleSpan>
              <BubbleSpan bg={BP50W} from="true">
                <CloseIcon />
              </BubbleSpan>
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
              <BubbleSpan bg={BP50B} from="true">
                <CloseIcon />
              </BubbleSpan>
              <BubbleSpan bg={BP50W} from="true">
                <CloseIcon />
              </BubbleSpan>
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
              <BubbleSpan from="true">
                <span>BluePad-50 v2 SS.pdf (05/08/2019)</span>
                <CloseIcon />
              </BubbleSpan>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Z-fold Preview</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <BubbleSpan from="true">
                <span>BluePad-50 v2 ZF.pdf (01/09/2019)</span>
                <CloseIcon />
              </BubbleSpan>
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
              <BubbleSpan from="true">
                <span>Lloyds BP50 Diecut.pdf (25/10/2020)</span>
                <CloseIcon />
              </BubbleSpan>
            </ValueLine>
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

export default FromBP

