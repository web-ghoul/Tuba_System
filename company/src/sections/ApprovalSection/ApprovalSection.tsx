import { Box, Divider, Paper, Typography } from "@mui/material";
import ApprovalCoveragePlanTable from "../../Tables/ApprovalCoveragePlanTable/ApprovalCoveragePlanTable";
import TextLine from "../../components/TextLine/TextLine";

const ApprovalSection = () => {
  return (
    <Paper className={`paper gap-8`}>
      <Box className={`grid justify-stretch items-center gap-2 w-fit`}>
        <Typography variant="h6" className={`!text-primary !font-[700]`}>
          تفاصيل الطلب
        </Typography>
        <Box
          className={
            "grid justify-stretch items-center rounded-lg border-[1px] border-solid border-[#E9E9E9] overflow-hidden"
          }
        >
          <Box
            className={`flex justify-between items-center gap-4 bg-primary p-3`}
          >
            <Typography variant="h6" className={`text-white !font-[700]`}>
              رقم CLR-228#
            </Typography>
            <Box className={`flex justify-center items-center gap-2`}>
              <Typography
                variant="subtitle1"
                className={`text-white !font-[600]`}
              >
                حالة الطلب :
              </Typography>
              <Box className={`bg-white text-center rounded-md p-3`}>
                <Typography variant="subtitle1" className={`text-primary`}>
                  قيد المراجعة
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            className={`flex justify-between items-center bg-white px-3 py-7`}
          >
            <Box
              className={`flex justify-center items-center gap-1 relative pl-5`}
            >
              <Typography
                variant="subtitle1"
                className={`text-tuba_gray !font-[600]`}
              >
                رقم الهوية الوطنية :
              </Typography>
              <Typography variant="subtitle1" className={`!font-[600]`}>
                2222222221
              </Typography>
              <Box
                className={`absolute h-[20px] w-[1px] bg-[#EBEBEB] top-[50%] translate-y-[-50%] left-0`}
              ></Box>
            </Box>

            <Box
              className={`flex justify-center items-center gap-1 relative px-5`}
            >
              <Typography
                variant="subtitle1"
                className={`text-tuba_gray !font-[600]`}
              >
                تاريخ الإصدار :
              </Typography>
              <Typography variant="subtitle1" className={`!font-[600]`}>
                30 أكتوبر 2024
              </Typography>
              <Box
                className={`absolute h-[20px] w-[1px] bg-[#EBEBEB] top-[50%] translate-y-[-50%] left-0`}
              ></Box>
            </Box>

            <Box className={`flex justify-center items-center gap-1 pr-5`}>
              <Typography
                variant="subtitle1"
                className={`text-tuba_gray !font-[600]`}
              >
                تم إصداره منذ :
              </Typography>
              <Typography
                variant="subtitle1"
                className={`text-red-500 !font-[600]`}
              >
                25 دقيقة
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className={`grid justify-stretch items-center gap-2 w-fit`}>
        <Typography variant="h6" className={`!text-primary !font-[700]`}>
          تفاصيل الخدمة
        </Typography>
        <Box
          className={
            "flex justify-between items-center gap-10 rounded-lg bg-white px-3 py-7 border-[1px] border-solid border-[#E9E9E9] overflow-hidden"
          }
        >
          <Box className={`flex justify-center items-center gap-1`}>
            <Typography
              variant="subtitle1"
              className={`text-tuba_gray !font-[600]`}
            >
              نوع الخدمة :
            </Typography>
            <Typography variant="subtitle1" className={`!font-[600]`}>
              المرضى الداخليين.
            </Typography>
          </Box>

          <Box className={`flex justify-center items-center gap-1`}>
            <Typography
              variant="subtitle1"
              className={`text-tuba_gray !font-[600]`}
            >
              اسم العضو :
            </Typography>
            <Typography variant="subtitle1" className={`!font-[600]`}>
              عبد الله بن سعود
            </Typography>
          </Box>

          <Box className={`flex justify-center items-center gap-1`}>
            <Typography
              variant="subtitle1"
              className={`text-tuba_gray !font-[600]`}
            >
              نوع العضو :
            </Typography>
            <Typography variant="subtitle1" className={`!font-[600]`}>
              أساسي
            </Typography>
          </Box>

          <Box className={`flex justify-center items-center gap-1`}>
            <Typography
              variant="subtitle1"
              className={`text-tuba_gray !font-[600]`}
            >
              مزود الخدمة :
            </Typography>
            <Typography variant="subtitle1" className={`!font-[600]`}>
              HCPB-1
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box className={`grid justify-stretch items-center gap-2 w-fit`}>
        <Typography variant="h6" className={`!text-primary !font-[700]`}>
          تفاصيل وثيقة التغطية
        </Typography>
        <Box
          className={
            "flex justify-between items-center gap-10 rounded-lg bg-white px-3 py-7 border-[1px] border-solid border-[#E9E9E9] overflow-hidden"
          }
        >
          <TextLine
            title={"رقم وثيقة التغطية :"}
            value={"202400001"}
            valueColor={"!text-primary"}
          />

          <TextLine
            title={"وثيقة التغطية :"}
            value={"DOC-202400001"}
            valueColor={"!text-primary"}
          />
        </Box>
      </Box>

      <Divider />

      <Box className={`grid justify-stretch items-center gap-2 w-fit`}>
        <Typography variant="h6" className={`!text-primary !font-[700]`}>
          خطة التغطية
        </Typography>
        <ApprovalCoveragePlanTable />
      </Box>

      <Box className={`flex justify-stretch items-center gap-6 flex-wrap`}>
        <Box className={`grid justify-stretch items-center gap-2`}>
          <Typography variant="h6" className={`!text-primary !font-[700]`}>
            تفاصيل تغطية العنصر CLI-122
          </Typography>
          <Box
            className={`grid justify-stretch items-center gap-3 rounded-md p-4 border-[1px] border-solid`}
          >
            <TextLine
              title={"المبلغ المغطى (الأساسي):"}
              value={"7000 ريال سعودي"}
            />
            <TextLine
              title={"المبلغ المغطى (ضريبة القيمة المضافة):"}
              value={"1050 ريال سعودي"}
            />
            <TextLine
              title={"المبلغ المغطى (الضريبة الكاملة):"}
              value={"8050 ريال سعودي"}
              valueColor={"!text-primary"}
            />
          </Box>
        </Box>
        <Box className={`grid justify-stretch items-center gap-2`}>
          <Typography variant="h6" className={`!text-primary !font-[700]`}>
            تفاصيل التحمل
          </Typography>
          <Box
            className={`grid justify-stretch items-center gap-3 rounded-md p-4 border-[1px] border-solid`}
          >
            <TextLine
              title={"المبلغ المستحق (الأساسي):"}
              value={"200 ريال سعودي"}
            />
            <TextLine
              title={"المبلغ المستحق (ضريبة القيمة المضافة):"}
              value={"30 ريال سعودي"}
            />
            <TextLine
              title={"المبلغ المستحق (الضريبة الكاملة):"}
              value={"230 ريال"}
              valueColor={"!text-primary"}
            />
          </Box>
        </Box>
        <Box className={`grid justify-stretch items-center gap-2`}>
          <Typography variant="h6" className={`!text-primary !font-[700]`}>
            تفاصيل السعر
          </Typography>
          <Box
            className={`grid justify-stretch items-center gap-3 rounded-md p-4 border-[1px] border-solid`}
          >
            <TextLine title={"السعر الأساسي:"} value={"7200 ريال سعودي"} />
            <TextLine
              title={"السعر مع ضريبة القيمة المضافة:"}
              value={"1080 ريال"}
            />
            <TextLine
              title={"السعر الإجمالي بعد الضريبة:"}
              value={"8280 ريال"}
              valueColor={"!text-primary"}
            />
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default ApprovalSection;
