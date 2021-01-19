import React from "react"

import { Section, Table, Row, HeadRow, ViewRow, ValWrap, SpecGroup, ValueLine, Para } from "../../common/wrappers"
import { Tooltip, Hover, Image, StyledSelect, StyledButton } from "../../common/bubbles"
import { DependenciesIcon, RadioIcon } from "../../common/icons"
import { Paragraph } from "../../common/texts"
import BP50B from "../../../files/BP50B.jpg"
import BP50W from "../../../files/BP50W.jpg"
import WDHBP50 from "../../../files/WDHBP50.jpg"

const Device = () => (
  <Section>

    <HeadRow>
      <Para>
        <span>#015 Device Name</span>
      </Para>
      <ValWrap>
        <ValueLine>
          <Paragraph>BluePad-50 v2</Paragraph>
          <StyledSelect>
            <option value="">v3.0 Latest</option>
          </StyledSelect>
          <StyledButton>Edit</StyledButton>
        </ValueLine>
      </ValWrap>
    </HeadRow>
    <ViewRow>
      <Para>
        <span>View</span>
      </Para>
      <ValWrap>
        <ValueLine>
          <StyledSelect defaultValue="All filled">
            <option value="">Full spec list</option>
            <option value="">All filled</option>
            <option value="">Reduced</option>
            <option value="">Highlights</option>
            <option value="">Custom</option>
          </StyledSelect>
          <StyledButton>Export</StyledButton>
        </ValueLine>
      </ValWrap>
    </ViewRow>
    <Table>
      <SpecGroup>
        <Row>
          <Para>
            <span>Category Path</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <Paragraph>
                Payment Terminals ⮞ PIN Pads
              </Paragraph>
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
              <Paragraph>
                <span>Black</span>
              </Paragraph>
              <Image bg={BP50B}>
              </Image>
            </ValueLine>
            <ValueLine>
              <Paragraph>
                <span>White</span>
              </Paragraph>
              <Image bg={BP50W}>
              </Image>
            </ValueLine>
            <ValueLine>
              <Paragraph>
                <span>Custom (MOQ: 500)</span>
              </Paragraph>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Description</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <Paragraph>
              BluePad-50 v2 is a compact, lightweight Bluetooth-enabled payment solution. It accepts magnetic stripe, EMV Chip and PIN and Contactless cards, delivering all payment options in the palm of your hand.
              </Paragraph>
            </ValueLine>
          </ValWrap>
        </Row>
      </SpecGroup>
      <SpecGroup>
        <Row>
          <Para>
            <span>Buttons</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <Paragraph>
                <span>1 On / Off</span>
              </Paragraph>
            </ValueLine>
            <ValueLine>
              <Paragraph>
                <span>10 numeric</span>
              </Paragraph>
            </ValueLine>
            <ValueLine>
              <Paragraph>
                <span>5 function</span>
              </Paragraph>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Display</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <Paragraph>
                128 × 32 px Backlit Monochrome LCD
              </Paragraph>
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
              <Paragraph>Triple track bi-directional</Paragraph>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Smart Card Reader</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <Paragraph>Landing</Paragraph>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Contactless Reader</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <Paragraph>RFID reader</Paragraph>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Contactless Payments</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <Paragraph>VISA payWave</Paragraph>
            </ValueLine>
            <ValueLine>
              <Paragraph>MasterCard PayPass</Paragraph>
            </ValueLine>
            <ValueLine>
              <Paragraph>American Express</Paragraph>
            </ValueLine>
            <ValueLine>
              <Paragraph>DPAS (Discover)</Paragraph>
            </ValueLine>
            <ValueLine>
              <Paragraph>J/Speedy (JCB)</Paragraph>
            </ValueLine>
            <ValueLine>
              <Paragraph>China UnionPay</Paragraph>
            </ValueLine>
            <ValueLine>
              <Paragraph>Interac (Canada)</Paragraph>
            </ValueLine>
            <ValueLine>
              <Paragraph>Gemalto PURE</Paragraph>
            </ValueLine>
            <ValueLine>
              <Paragraph>Common.SECC</Paragraph>
            </ValueLine>
            <ValueLine>
              <Paragraph>MIR (Russia)</Paragraph>
            </ValueLine>
            <ValueLine>
              <Paragraph>RuPay (India)</Paragraph>
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
              <Paragraph>1 USB micro port</Paragraph>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Wired Communication</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <Paragraph>USB</Paragraph>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>OS Compatibility</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <Paragraph>Android</Paragraph>
            </ValueLine>
            <ValueLine>
              <Paragraph>Windows</Paragraph>
            </ValueLine>
            <ValueLine>
              <Paragraph>iOS</Paragraph>
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
              <Paragraph>version 3.0</Paragraph>
            </ValueLine>
          </ValWrap>
        </Row>
      </SpecGroup>
      <SpecGroup>
        <Row>
          <Para>
            <span>LED Indication</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <Paragraph>Payment status</Paragraph>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Audio Features</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <Paragraph>Electromagnetic buzzer</Paragraph>
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
              <Paragraph>DC 5 V, USB</Paragraph>
            </ValueLine>
            <ValueLine>
              <Paragraph>DC 5 V, contact pins</Paragraph>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Battery</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <Paragraph>Li-Po, 3.7 V, 620 mAh</Paragraph>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Reliability</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <Paragraph>500,000 chip card cycles</Paragraph>
            </ValueLine>
            <ValueLine>
              <Paragraph>1,000,000 magnetic card swipes</Paragraph>
            </ValueLine>
            <ValueLine>
              <Paragraph>1,000,000 button clicks</Paragraph>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Certificates</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <Paragraph>CE</Paragraph>
            </ValueLine>
            <ValueLine>
              <Paragraph>FCC</Paragraph>
            </ValueLine>
            <ValueLine>
              <Paragraph>PCI PTS 4.x</Paragraph>
            </ValueLine>
            <ValueLine>
              <Paragraph>EMV Level 1</Paragraph>
            </ValueLine>
            <ValueLine>
              <Paragraph>EMV Level 2</Paragraph>
            </ValueLine>
            <ValueLine>
              <Paragraph>EMV Level 1 Contactless</Paragraph>
            </ValueLine>
            <ValueLine>
              <Paragraph>Apple Mfi</Paragraph>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Dimensions W × D × H</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <Paragraph>69 × 110 × 17 mm</Paragraph>
              <Hover>
                <Tooltip bg={WDHBP50}></Tooltip>
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
              <Paragraph>123 g</Paragraph>
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
              <Paragraph>-10 °C to 45 °C, 5 to 90 % RH</Paragraph>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Storage Temperature</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <Paragraph>-15 °C to 55 °C, 5 to 90 % RH</Paragraph>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Drop Tested</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <Paragraph>faces and edges from 1.5 m</Paragraph>
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
              <Paragraph>Cable, 0.9 m, USB Type-A plug to USB micro plug</Paragraph>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Compatible Accessories</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <StyledButton>Charger (GT1)</StyledButton>
            </ValueLine>
            <ValueLine>
              <StyledButton>5-unit charger (GT5)</StyledButton>
            </ValueLine>
            <ValueLine>
              <StyledButton>Power Stand (DST-50)</StyledButton>
            </ValueLine>
            <ValueLine>
              <StyledButton>Holster</StyledButton>
            </ValueLine>
            <ValueLine>
              <StyledButton>Privacy shield</StyledButton>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Related Products</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <StyledButton>DP-150</StyledButton>
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
              <StyledButton>Download (456 KB)</StyledButton>
              <StyledButton>Copy Link</StyledButton>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>High Res RGB</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <StyledButton>Download (38.3 MB)</StyledButton>
              <StyledButton>Copy Link</StyledButton>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>A4 Spec Sheet</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <StyledButton>BluePad-50 v2 SS.pdf (05/08/2019)</StyledButton>
              <StyledButton>Copy Link</StyledButton>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Z-fold Preview</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <StyledButton>BluePad-50 v2 ZF.pdf (01/09/2019)</StyledButton>
              <StyledButton>Copy Link</StyledButton>
            </ValueLine>
          </ValWrap>
        </Row>
        <Row>
          <Para>
            <span>Packaging Prints</span>
          </Para>
          <ValWrap>
            <ValueLine>
              <StyledButton>Lloyds BP50 Diecut.pdf (25/10/2020)</StyledButton>
              <StyledButton>Copy Link</StyledButton>
            </ValueLine>
          </ValWrap>
        </Row>
      </SpecGroup>
    </Table>
  </Section>
)

export default Device

