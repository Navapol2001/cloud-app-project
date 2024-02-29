package cloud.app.project.server.controller

import cloud.app.project.server.model.DebitPaid
import cloud.app.project.server.service.DebitPaidService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageRequest
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/debitPaid")
class DebitPaidController {
    @Autowired
    private lateinit var debitPaidService: DebitPaidService

    @GetMapping
    fun getAll(): List<DebitPaid> {
        return debitPaidService.getAllDebitPaid()
    }
    @GetMapping("/year/{year}")
    fun getByYear(
        @PathVariable("year") year: String,
        @RequestParam(defaultValue = "0") page: Int,
        @RequestParam(defaultValue = "20") size: Int
    ): Page<DebitPaid> {
        val pageable = PageRequest.of(page, size)
        return debitPaidService.getByUpdDate(year, pageable)
    }

    @GetMapping("/custId/{custId}")
    fun getByCustId(
        @PathVariable("custId") custId: String,
        @RequestParam(defaultValue = "0") page: Int,
        @RequestParam(defaultValue = "20") size: Int
    ): Page<DebitPaid> {
        val pageable = PageRequest.of(page, size)
        return debitPaidService.getByCustId(custId, pageable)
    }

    @GetMapping("/filter/{custId}/{year}")
    fun getFiltereddebitViews(
        @PathVariable("custId") custId: String,
        @PathVariable("year") year: String,
        @RequestParam(defaultValue = "0") page: Int,
        @RequestParam(defaultValue = "20") size: Int
    ): Page<DebitPaid> {
        val pageable = PageRequest.of(page, size)
        return debitPaidService.getByFilterParam(custId, year, pageable)
    }
}