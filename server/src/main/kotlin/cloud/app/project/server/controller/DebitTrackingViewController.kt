package cloud.app.project.server.controller

import cloud.app.project.server.model.DebitTrackingView
import cloud.app.project.server.service.DebitTrackingViewService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageRequest
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/debitTrackingView")
class DebitTrackingViewController {
    @Autowired
    private lateinit var debitTrackingViewService: DebitTrackingViewService

    @GetMapping
    fun getAll(
        @RequestParam(defaultValue = "0") page: Int,
        @RequestParam(defaultValue = "20") size: Int
    ): MutableList<DebitTrackingView> {
        val pageable = PageRequest.of(page, size)
        return debitTrackingViewService.getAllDebitTrackingView(pageable)
    }

    @GetMapping("/year/{year}")
    fun getByYear(
        @PathVariable("year") year: String,
        @RequestParam(defaultValue = "0") page: Int,
        @RequestParam(defaultValue = "20") size: Int
    ): Page<DebitTrackingView> {
        val pageable = PageRequest.of(page, size)
        return debitTrackingViewService.getByUpdDate(year, pageable)
    }

    @GetMapping("/custId/{custId}")
    fun getByCustId(
        @PathVariable("custId") custId: String,
        @RequestParam(defaultValue = "0") page: Int,
        @RequestParam(defaultValue = "20") size: Int
    ): Page<DebitTrackingView> {
        val pageable = PageRequest.of(page, size)
        return debitTrackingViewService.getByCustId(custId, pageable)
    }

    @GetMapping("/filter/{custId}/{year}")
    fun getFiltereddebitViews(
        @PathVariable("custId") custId: String,
        @PathVariable("year") year: String,
        @RequestParam(defaultValue = "0") page: Int,
        @RequestParam(defaultValue = "20") size: Int
    ): Page<DebitTrackingView> {
        val pageable = PageRequest.of(page, size)
        return debitTrackingViewService.getByFilterParam(custId, year, pageable)
    }
}