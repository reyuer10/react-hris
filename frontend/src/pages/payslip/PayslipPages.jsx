import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import logo from "../../assets/image/logo/onsemi.png";

function PayslipPages() {
  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      backgroundColor: "#ffffff",
      padding: 20,
      color: "#323232",
    },
    wrappedHeader: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: 0.5,
      borderBottomColor: "#323232",
    },
    image: {
      width: 110,
      height: 20,
    },
    payslipText: {
      fontSize: 20,
      fontWeight: 700,
    },
  });

  const styleSubHeader = StyleSheet.create({
    wrappedCompanyTitle: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    companyText: {
      fontSize: 9,
    },
    companyName: {
      fontSize: 11,
      fontWeight: 700,
    },
  });

  const styleInitialSubHeader = StyleSheet.create({
    wrapped: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 5,
      paddingHorizontal: 20,
      borderBottom: 0.5,
      borderBottomColor: "#323232",
    },
  });

  const styleMainContent = StyleSheet.create({
    wrapped: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      fontSize: 9,
      width: "100%",
      height: "100%",
    },

    sideContent: {
      borderRight: 0.5,
      borderRightColor: "#323232",
      width: "30%",
      height: "50%",
    },

    mainContent: {
      width: "70%",
      height: "50%",
      padding: 10,
    },
  });

  const styleSideContent = StyleSheet.create({
    nameContent: {
      height: "10%",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
    },

    employeeName: {
      fontSize: 10,
      fontWeight: 700,
    },

    positionContent: {
      fontSize: 8,
    },

    infoContent: {
      padding: 10,
      height: "40%",
      fontSize: 8,
    },

    taxInfo: {
      padding: 9,
      height: "50%",
    },

    taxTitle: {
      color: "#4a5565",
    },

    taxData: {
      fontWeight: 700,
    },

    spaceBetween: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: 2,
    },

    textWidth: {
      width: "90px",
      textAlign: "right",
      fontWeight: 700,
    },
  });

  const stylesDateToFigures = StyleSheet.create({
    title: {
      fontWeight: 700,
      fontSize: 10,
      borderBottomWidth: 0.5,
      borderBottomColor: "#323232",
      paddingVertical: 6,
    },

    bodyContent: {},

    contentSpaceBetween: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 2,
      fontSize: 8,
    },

    fontBold: {
      fontWeight: 700,
    },
  });

  const styleRightContent = StyleSheet.create({
    Wrapped: {
      height: "45%",
      width: "100%",
    },

    Header: {
      height: "35%",
      padding: 13,
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },

    Body: {
      height: "35%",
      width: "100%",
      padding: 13,
      display: "flex",
      flexDirection: "row",
    },

    Footer: {
      height: "35%",
      width: "100%",
      padding: 13,
    },
  });

  const rightContentHeader = StyleSheet.create({
    left: {
      height: "100%",
      width: "35%",
    },

    middle: {
      height: "100%",
      width: "30%",
    },

    right: {
      height: "100%",
      width: "35%",
    },

    rightContentHeight: {
      height: "25%",
    },

    basicPayPerMonthTitle: {
      fontStyle: "italic",
      color: "#52525c",
    },

    spaceBetween: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },

    fontBold: {
      fontWeight: 700,
    },
  });

  const rightContentMiddle = StyleSheet.create({
    left: {
      height: "100%",
      width: "35%",
    },

    right: {
      height: "100%",
      width: "65%",
    },

    firstLayer: {
      height: "30%",
    },

    secondLayer: {
      height: "70%",
      paddingVertical: 12,
    },

    fontBold: {
      fontWeight: 700,
    },

    spaceBetween: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },

    child: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 2,
    },

    grossPayTitle: {
      padding: 4,
      backgroundColor: "#f3f4f6",
      fontWeight: 700,
    },

    grossPayAmount: {
      padding: 4,
      width: "100%",
      textAlign: "right",
      backgroundColor: "#f3f4f6",
      fontWeight: 700,
    },

    contributionsTitle: {
      paddingVertical: 8,
    },
  });

  const rightContentFooter = StyleSheet.create({
    spaceBetween: {
      paddingVertical: 2,
      justifyContent: "space-between",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      fontWeight: 700,
    },

    spaceBetweenWithHighlight: {
      padding: 4,
      justifyContent: "space-between",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      fontWeight: 700,
      backgroundColor: "#f3f4f6",
    },

  });

  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.wrappedHeader}>
          <Image src={logo} style={styles.image} />
          <Text style={styles.payslipText}>Payslip</Text>
        </View>
        <View style={styleInitialSubHeader.wrapped}>
          <View style={styleSubHeader.wrappedCompanyTitle}>
            <Text style={styleSubHeader.companyText}>Company</Text>
            <Text style={styleSubHeader.companyName}>
              On Semiconductor Corporation
            </Text>
          </View>
          <View style={styleSubHeader.wrappedCompanyTitle}>
            <Text style={styleSubHeader.companyText}>Pay Period</Text>
            <Text style={styleSubHeader.companyName}>
              Aug 01 to Aug 15, 2025
            </Text>
          </View>
        </View>
        <View style={styleMainContent.wrapped}>
          <View style={styleMainContent.sideContent}>
            <View style={styleSideContent.nameContent}>
              <Text style={styleSideContent.employeeName}>Juan Dela Cruz</Text>
              <Text style={styleSideContent.positionContent}>
                Specialist - Technical Support
              </Text>
            </View>
            <View style={styleSideContent.infoContent}>
              <View style={styleSideContent.spaceBetween}>
                <Text style={styleSideContent.taxTitle}>Employee No</Text>
                <Text style={styleSideContent.taxData}>S123</Text>
              </View>
              <View style={styleSideContent.spaceBetween}>
                <Text style={styleSideContent.taxTitle}>Daily Rate</Text>
                <Text style={styleSideContent.taxData}>657.53</Text>
              </View>
              <View style={styleSideContent.spaceBetween}>
                <Text style={styleSideContent.taxTitle}>Date Hired</Text>
                <Text style={styleSideContent.taxData}>Sept 30, 2024</Text>
              </View>
              <View style={styleSideContent.spaceBetween}>
                <Text style={styleSideContent.taxTitle}>Position</Text>
                <Text style={styleSideContent.textWidth}>
                  Specialist - Technical Support
                </Text>
              </View>
              <View style={styleSideContent.spaceBetween}>
                <Text style={styleSideContent.taxTitle}>Payroll Mode</Text>
                <Text style={styleSideContent.taxData}>Semi Monthly</Text>
              </View>
              <View style={styleSideContent.spaceBetween}>
                <Text style={styleSideContent.taxTitle}>Salary Basis</Text>
                <Text style={styleSideContent.taxData}>Monthly</Text>
              </View>
              <View style={styleSideContent.spaceBetween}>
                <Text style={styleSideContent.taxTitle}>TIN</Text>
                <Text style={styleSideContent.taxData}>123456</Text>
              </View>
              <View style={styleSideContent.spaceBetween}>
                <Text style={styleSideContent.taxTitle}> SSS</Text>
                <Text style={styleSideContent.taxData}>123456</Text>
              </View>
              <View style={styleSideContent.spaceBetween}>
                <Text style={styleSideContent.taxTitle}>HDMF</Text>
                <Text style={styleSideContent.taxData}>123456</Text>
              </View>
              <View style={styleSideContent.spaceBetween}>
                <Text style={styleSideContent.taxTitle}>Philhealth</Text>
                <Text style={styleSideContent.taxData}>123456</Text>
              </View>
            </View>
            <View style={styleSideContent.taxInfo}>
              <View>
                <Text style={stylesDateToFigures.title}>
                  Year To Date Figures
                </Text>
              </View>
              <View style={stylesDateToFigures.contentSpaceBetween}>
                <Text>Gross Income</Text>
                <Text style={stylesDateToFigures.fontBold}>123456</Text>
              </View>
              <View style={stylesDateToFigures.contentSpaceBetween}>
                <Text>Taxable Income</Text>
                <Text style={stylesDateToFigures.fontBold}>123456</Text>
              </View>
              <View style={stylesDateToFigures.contentSpaceBetween}>
                <Text>Withholding Tax</Text>
                <Text style={stylesDateToFigures.fontBold}>123456</Text>
              </View>
              <View style={stylesDateToFigures.contentSpaceBetween}>
                <Text>SSS EE</Text>
                <Text style={stylesDateToFigures.fontBold}>123456</Text>
              </View>
              <View style={stylesDateToFigures.contentSpaceBetween}>
                <Text>PHIC EE</Text>
                <Text style={stylesDateToFigures.fontBold}>123456</Text>
              </View>
              <View style={stylesDateToFigures.contentSpaceBetween}>
                <Text>HDMF EE</Text>
                <Text style={stylesDateToFigures.fontBold}>123456</Text>
              </View>
              <View style={stylesDateToFigures.contentSpaceBetween}>
                <Text>Net Pay</Text>
                <Text style={stylesDateToFigures.fontBold}>123456</Text>
              </View>
            </View>
          </View>
          <View style={styleRightContent.Wrapped}>
            <View style={styleRightContent.Header}>
              <View style={rightContentHeader.left}>
                <View style={rightContentHeader.rightContentHeight}>
                  <Text style={rightContentHeader.fontBold}>Basic Pay</Text>
                  <Text style={rightContentHeader.fontBold}>Salary</Text>
                </View>
                <View style={rightContentHeader.rightContentHeight}>
                  <Text></Text>
                </View>
                <View style={rightContentHeader.rightContentHeight}>
                  <Text style={rightContentHeader.fontBold}>
                    Taxable Allowance
                  </Text>
                  <Text style={rightContentHeader.fontBold}>
                    Non-taxable Allowance
                  </Text>
                </View>
                <View style={rightContentHeader.rightContentHeight}>
                  <Text></Text>
                </View>
              </View>
              <View style={rightContentHeader.middle}>
                <View style={rightContentHeader.rightContentHeight}>
                  <Text></Text>
                </View>
                <View style={rightContentHeader.rightContentHeight}>
                  <Text style={rightContentHeader.fontBold}>
                    Special Holiday
                  </Text>
                  <Text style={rightContentHeader.fontBold}>
                    Net Night Differential
                  </Text>
                </View>
                <View style={rightContentHeader.rightContentHeight}>
                  <Text></Text>
                </View>
                <View style={rightContentHeader.rightContentHeight}>
                  <Text style={rightContentHeader.fontBold}>
                    Attendance Allowance
                  </Text>
                  <Text style={rightContentHeader.fontBold}>
                    Post Allowance
                  </Text>
                </View>
              </View>
              <View style={rightContentHeader.right}>
                <View style={rightContentHeader.rightContentHeight}>
                  <View style={rightContentHeader.spaceBetween}>
                    <Text style={rightContentHeader.basicPayPerMonthTitle}>
                      16,000.00/Month
                    </Text>
                    <Text style={rightContentHeader.fontBold}>8,000.00</Text>
                  </View>
                </View>
                <View style={rightContentHeader.rightContentHeight}>
                  <View style={rightContentHeader.spaceBetween}>
                    <Text style={rightContentHeader.basicPayPerMonthTitle}>
                      2day(s)
                    </Text>
                    <Text style={rightContentHeader.fontBold}>394.52</Text>
                  </View>
                  <View style={rightContentHeader.spaceBetween}>
                    <Text>-</Text>
                    <Text style={rightContentHeader.fontBold}>348.49</Text>
                  </View>
                </View>
                <View style={rightContentHeader.rightContentHeight}></View>
                <View style={rightContentHeader.rightContentHeight}>
                  <View style={rightContentHeader.spaceBetween}>
                    <Text></Text>
                    <Text style={rightContentHeader.fontBold}>500.00</Text>
                  </View>
                  <View style={rightContentHeader.spaceBetween}>
                    <Text></Text>
                    <Text style={rightContentHeader.fontBold}>1,000.00</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styleRightContent.Body}>
              <View style={rightContentMiddle.left}>
                <Text style={rightContentMiddle.grossPayTitle}>GROSS PAY</Text>
                <Text style={rightContentMiddle.contributionsTitle}>
                  Contributions
                </Text>
              </View>
              <View style={rightContentMiddle.right}>
                <View style={rightContentMiddle.firstLayer}>
                  <View style={rightContentMiddle.spaceBetween}>
                    <Text></Text>
                    <Text style={rightContentMiddle.grossPayAmount}>
                      10,243.01
                    </Text>
                  </View>
                </View>
                <View style={rightContentMiddle.secondLayer}>
                  <View style={rightContentMiddle.child}>
                    <Text>SSS</Text>
                    <Text style={rightContentMiddle.fontBold}>(637.50)</Text>
                  </View>
                  <View style={rightContentMiddle.child}>
                    <Text>HDMF</Text>
                    <Text style={rightContentMiddle.fontBold}>(200.00)</Text>
                  </View>
                  <View style={rightContentMiddle.child}>
                    <Text>PhilHealth</Text>
                    <Text style={rightContentMiddle.fontBold}>(400.00)</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styleRightContent.Footer}>
              {/* rightContentFooter */}
              <View style={rightContentFooter.spaceBetweenWithHighlight}>
                <Text>TAXABLE INCOME</Text>
                <Text>7,505.51</Text>
              </View>
              <View style={rightContentFooter.spaceBetween}>
                <Text>Deductions</Text>
                <Text></Text>
              </View>
              <View style={rightContentFooter.spaceBetween}>
                <Text>Withholding Tax</Text>
                <Text>(0.00)</Text>
              </View>
              <View style={rightContentFooter.spaceBetweenWithHighlight}>
                <Text>NET PAY</Text>
                <Text>9,005.51</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default PayslipPages;
