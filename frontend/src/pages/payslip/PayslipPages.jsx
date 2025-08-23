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
    },
  });

  const styleRightContent = StyleSheet.create({
    Wrapped: {
      height: "45%",
      borderWidth: 0.5
    },

    Header: {
      height: "35%",
      borderWidth: 0.5,
      padding: 13,
    },

    Body: {
      height: "35%",
      borderWidth: 0.5,
      padding: 13,
    },

    Footer: {
      height: "35%",
      borderWidth: 0.5,
      padding: 13,
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
                <Text>123456</Text>
              </View>
              <View style={stylesDateToFigures.contentSpaceBetween}>
                <Text>Taxable Income</Text>
                <Text>123456</Text>
              </View>
              <View style={stylesDateToFigures.contentSpaceBetween}>
                <Text>Withholding Tax</Text>
                <Text>123456</Text>
              </View>
              <View style={stylesDateToFigures.contentSpaceBetween}>
                <Text>SSS EE</Text>
                <Text>123456</Text>
              </View>
              <View style={stylesDateToFigures.contentSpaceBetween}>
                <Text>PHIC EE</Text>
                <Text>123456</Text>
              </View>
              <View style={stylesDateToFigures.contentSpaceBetween}>
                <Text>HDMF EE</Text>
                <Text>123456</Text>
              </View>
              <View style={stylesDateToFigures.contentSpaceBetween}>
                <Text>Net Pay</Text>
                <Text>123456</Text>
              </View>
            </View>
          </View>
          <View style={styleRightContent.Wrapped}>
            <View style={styleRightContent.Header}>
              <Text>Header</Text>
            </View>
            <View style={styleRightContent.Body}>
              <Text>Body</Text>
            </View>
            <View style={styleRightContent.Footer}>
              <Text>Footer</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default PayslipPages;
