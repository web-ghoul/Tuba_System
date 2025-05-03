import * as yup from "yup";

const useMemberSchema = () => {
  const MemberSchema = yup.object({
    name: yup.string().required("البريد الالكترونى مطلوب"),
    nationality: yup.string().required("كلمة المرور مطلوبة"),
    nationalNo: yup.string().required("كلمة المرور مطلوبة"),
    relation: yup.string().required("كلمة المرور مطلوبة"),
    phone: yup.string().required("كلمة المرور مطلوبة"),
    gender: yup.string().required("كلمة المرور مطلوبة"),
    dateOfBirth: yup.string().required("كلمة المرور مطلوبة"),
    coveragePackage: yup.string().required("كلمة المرور مطلوبة"),
  });

  const MemberInitialValues = {
    name: "",
    nationality: "",
    nationalNo: "",
    relation: "",
    phone: "",
    gender: "",
    dateOfBirth: "",
    coveragePackage: "",
  };

  return { MemberSchema, MemberInitialValues };
};

export default useMemberSchema;
