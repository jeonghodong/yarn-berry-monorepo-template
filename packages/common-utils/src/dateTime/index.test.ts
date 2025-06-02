import { getTimeString, getDateString } from '.'

describe('날짜 유틸리티', () => {
  it('올바른 시간 문자열을 반환해야 합니다', () => {
    const date = '2023-07-09T14:30:00Z'
    const timeString = getTimeString(date)
    const expectedTime = new Date(date).toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
    console.log('받은 시간 문자열:', timeString)
    console.log('기대한 시간 문자열:', expectedTime)
    expect(timeString).toBe(expectedTime)
  })

  it('올바른 날짜 문자열을 반환해야 합니다', () => {
    const date = '2023-07-09T14:30:00Z'
    const dateString = getDateString(date)
    console.log('받은 날짜 문자열:', dateString)
    console.log('기대한 날짜 문자열: 2023-07-09')
    expect(dateString).toBe('2023-07-09')
  })

  it('다른 시간대를 올바르게 처리해야 합니다', () => {
    const date = '2023-07-09T14:30:00-05:00'
    const timeString = getTimeString(date)
    const expectedTime = new Date(date).toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
    console.log('받은 시간 문자열:', timeString)
    console.log('기대한 시간 문자열:', expectedTime)
    expect(timeString).toBe(expectedTime)
  })

  it('잘못된 날짜를 처리해야 합니다', () => {
    const date = 'invalid-date'
    console.log('잘못된 날짜 입력:', date)
    expect(() => getTimeString(date)).toThrow()
    expect(() => getDateString(date)).toThrow()
  })
})
