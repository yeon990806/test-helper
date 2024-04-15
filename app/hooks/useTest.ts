import * as XLSX from 'xlsx';
import useTestStore from './../store/useTestStore'
import { useNavigate } from '@remix-run/react';

const useTest = () => {
  const { updateContent } = useTestStore()
  const navigate = useNavigate()
  const onHandleXlsxFile = async (f: File): Promise<void> => {
    try {
      const fileData = await f.arrayBuffer()
      const workbook = XLSX.read(fileData, {type: 'buffer'})
      const worksheet = workbook.Sheets[workbook.SheetNames[0]]
      const jsonData: Array<string[]> = XLSX.utils.sheet_to_json(worksheet, {
        header: 1,
        defval: ''
      }) as Array<string[]>

      const filteredData: Array<string[]> = jsonData.filter((v) => v[0] && v[1]).splice(1)

      updateContent(filteredData)
      navigate('/menu')
    } catch (e) {
      console.error(e)
    }
  }

  return {
    onHandleXlsxFile
  }
}
export default useTest